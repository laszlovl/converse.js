self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('push', function(event) {
    const payload = event.data ? event.data.json() : null;

    // Keep the service worker alive until the notification is created.
    event.waitUntil(
        self.registration.showNotification("Converse XMPP notification", {
            body: "body",
            tag: "tag",
            requireInteraction: true,
            data: {
                a: "b"
            }
        })
    );
});
