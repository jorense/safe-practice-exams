/**
 * Share Progress Utility
 * Generates shareable URLs with embedded progress data and expiration
 */

const EXPIRATION_TIME = 30 * 60 * 1000; // 30 minutes in milliseconds

/**
 * Compress and encode data for URL sharing
 * @param {Object} data - The data to encode
 * @returns {string} Encoded string safe for URL
 */
function encodeData(data) {
  try {
    const jsonString = JSON.stringify(data);
    // Use base64 encoding (URL-safe)
    const encoded = btoa(encodeURIComponent(jsonString));
    return encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  } catch (err) {
    console.error('Encoding failed:', err);
    throw new Error('Failed to encode data');
  }
}

/**
 * Decode URL-encoded data
 * @param {string} encoded - The encoded string
 * @returns {Object} Decoded data object
 */
function decodeData(encoded) {
  try {
    // Restore base64 padding and characters
    let base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) {
      base64 += '=';
    }
    const decoded = decodeURIComponent(atob(base64));
    return JSON.parse(decoded);
  } catch (err) {
    console.error('Decoding failed:', err);
    throw new Error('Failed to decode data');
  }
}

/**
 * Generate a shareable URL with progress data
 * @returns {string} Shareable URL with encoded data and expiration
 */
export function generateShareLink() {
  const exportData = {
    exportDate: new Date().toISOString(),
    expiresAt: Date.now() + EXPIRATION_TIME,
    version: '1.0',
    sessionHistory: [],
    questionTracking: {},
    achievements: null
  };

  // Collect session history
  try {
    const historyData = localStorage.getItem('practice-exam-history');
    if (historyData) {
      exportData.sessionHistory = JSON.parse(historyData);
    }
  } catch (err) {
    console.error('Error reading session history:', err);
  }

  // Collect question tracking data
  const trackingKeys = ['psm2-seen', 'pspo1-seen', 'pali-seen', 'leadingsafe6-seen', 'safeteams6-seen'];
  trackingKeys.forEach(key => {
    try {
      const data = localStorage.getItem(key);
      if (data) {
        exportData.questionTracking[key] = JSON.parse(data);
      }
    } catch (err) {
      console.error(`Error reading ${key}:`, err);
    }
  });

  // Collect achievements
  try {
    const achievementsData = localStorage.getItem('exam-achievements');
    if (achievementsData) {
      exportData.achievements = JSON.parse(achievementsData);
    }
  } catch (err) {
    console.error('Error reading achievements:', err);
  }

  // Encode data
  const encoded = encodeData(exportData);
  
  // Generate shareable URL
  const baseUrl = window.location.origin + window.location.pathname;
  const shareUrl = `${baseUrl}?import=${encoded}`;
  
  return shareUrl;
}

/**
 * Import data from a share URL
 * @param {string} encodedData - The encoded data from URL parameter
 * @returns {Object} Result object with success status and message
 */
export function importFromShareLink(encodedData) {
  try {
    const data = decodeData(encodedData);
    
    // Validate data structure
    if (!data || typeof data !== 'object') {
      return { success: false, message: 'Invalid data format' };
    }

    // Check expiration
    if (data.expiresAt && Date.now() > data.expiresAt) {
      const expiredDate = new Date(data.expiresAt);
      return { 
        success: false, 
        message: `Share link expired at ${expiredDate.toLocaleTimeString()} on ${expiredDate.toLocaleDateString()}` 
      };
    }

    // Import session history
    let imported = false;
    if (Array.isArray(data.sessionHistory) && data.sessionHistory.length > 0) {
      localStorage.setItem('practice-exam-history', JSON.stringify(data.sessionHistory));
      imported = true;
    }

    // Import question tracking data
    if (data.questionTracking && typeof data.questionTracking === 'object') {
      Object.entries(data.questionTracking).forEach(([key, value]) => {
        if (value) {
          localStorage.setItem(key, JSON.stringify(value));
          imported = true;
        }
      });
    }

    // Import achievements
    if (data.achievements) {
      localStorage.setItem('exam-achievements', JSON.stringify(data.achievements));
      imported = true;
    }

    if (!imported) {
      return { success: false, message: 'No valid data found in share link' };
    }

    const exportDate = data.exportDate ? new Date(data.exportDate).toLocaleString() : 'Unknown';
    return { 
      success: true, 
      message: `Successfully imported progress data from ${exportDate}`,
      sessionCount: data.sessionHistory?.length || 0
    };
  } catch (err) {
    console.error('Import failed:', err);
    return { 
      success: false, 
      message: err.message || 'Failed to import data from share link' 
    };
  }
}

/**
 * Get time remaining until expiration
 * @param {number} expiresAt - Timestamp when the link expires
 * @returns {string} Human-readable time remaining
 */
export function getTimeRemaining(expiresAt) {
  const remaining = expiresAt - Date.now();
  if (remaining <= 0) return 'Expired';
  
  const minutes = Math.floor(remaining / 60000);
  if (minutes < 1) return 'Less than 1 minute';
  if (minutes === 1) return '1 minute';
  return `${minutes} minutes`;
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success status
 */
export async function copyToClipboard(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        textArea.remove();
        return true;
      } catch (err) {
        console.error('Fallback copy failed:', err);
        textArea.remove();
        return false;
      }
    }
  } catch (err) {
    console.error('Copy to clipboard failed:', err);
    return false;
  }
}
