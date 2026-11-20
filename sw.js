// Service worker minimal (hanya agar aplikasi dapat di-install). Tidak menyimpan cache,
// jadi data keuangan & versi terbaru index.html selalu diambil dari server.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
