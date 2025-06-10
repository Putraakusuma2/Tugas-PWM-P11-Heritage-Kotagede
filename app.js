// Mengecek apakah browser mendukung service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Registrasi file sw.js
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker terdaftar:', reg.scope))
      .catch(err => console.log('Gagal daftar Service Worker:', err));
  });
}