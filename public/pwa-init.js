// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Use relative path for GitHub Pages compatibility
    const swPath = './sw.js';
    navigator.serviceWorker.register(swPath)
      .then((registration) => {
        console.log('SW registered: ', registration);
        console.log('SW scope: ', registration.scope);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
        console.error('Error details:', registrationError);
      });
  });
}

// PWA Install Prompt Handler
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  
  // Show custom install button/banner
  const installBanner = document.createElement('div');
  installBanner.innerHTML = `
    <div style="position: fixed; bottom: 20px; left: 20px; right: 20px; background: #667eea; color: white; padding: 15px; border-radius: 8px; z-index: 1000; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
      <p style="margin: 0 0 10px; font-weight: bold;">Install SAFe Practice Exams</p>
      <p style="margin: 0 0 15px; font-size: 14px;">Get the full experience with offline access and push notifications</p>
      <button id="install-btn" style="background: white; color: #667eea; border: none; padding: 8px 16px; border-radius: 4px; font-weight: bold; cursor: pointer; margin-right: 10px;">Install</button>
      <button id="dismiss-btn" style="background: transparent; color: white; border: 1px solid white; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Later</button>
    </div>
  `;
  
  document.body.appendChild(installBanner);
  
  document.getElementById('install-btn').addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      }
      deferredPrompt = null;
      document.body.removeChild(installBanner);
    });
  });
  
  document.getElementById('dismiss-btn').addEventListener('click', () => {
    document.body.removeChild(installBanner);
  });
});

// PWA Status Detection
window.addEventListener('load', () => {
  // Detect if running as PWA
  if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
    console.log('Running as PWA');
    document.body.classList.add('pwa-mode');
  }
  
  // Detect iOS Safari PWA
  if (window.navigator.standalone === true) {
    console.log('Running as iOS PWA');
    document.body.classList.add('ios-pwa-mode');
  }
});