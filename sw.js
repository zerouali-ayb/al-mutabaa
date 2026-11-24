// العنوان القديم: يزيل نفسه وذاكرته (لا يمس ذاكرة النسخة التجريبية) ثم يحوّل إلى العنوان الجديد
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k.startsWith('mutabaa-') && !k.startsWith('mutabaa-beta-')) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate('https://mutabaa-tarbawiya.github.io/');
})()));
