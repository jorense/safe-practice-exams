/**
 * Export all practice exam data as JSON for backup/import purposes
 * @returns {string} JSON string containing all practice exam data
 */
export function exportDataJSON() {
  const exportData = {
    exportDate: new Date().toISOString(),
    version: '1.0',
    sessionHistory: [],
    questionTracking: {},
    achievements: null
  };

  // Export session history
  try {
    const historyData = localStorage.getItem('practice-exam-history');
    if (historyData) {
      exportData.sessionHistory = JSON.parse(historyData);
    }
  } catch (err) {
    console.error('Error reading session history:', err);
  }

  // Export question tracking data
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

  // Export achievements
  try {
    const achievementsData = localStorage.getItem('exam-achievements');
    if (achievementsData) {
      exportData.achievements = JSON.parse(achievementsData);
    }
  } catch (err) {
    console.error('Error reading achievements:', err);
  }

  return JSON.stringify(exportData, null, 2);
}

/**
 * Download JSON data as a file
 * @param {string} jsonData - The JSON string to download
 * @param {string} filename - The filename for the download
 */
export function downloadJSON(jsonData, filename = 'practice-exam-backup.json') {
  const blob = new Blob([jsonData], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
