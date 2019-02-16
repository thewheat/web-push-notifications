importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Go to https://console.firebase.google.com
// Click / Create project
// Cog next to "Project Overview" > Project Settings > Cloud Messaging > Sender ID
firebase.initializeApp({
  'messagingSenderId': 'GET_SENDER_ID_VALUE_VIA_STEPS_ABOVE'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  var notificationTitle = 'Background Message Title';
  var notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png',
    webpush: {
      notification: {
        "title": "Web push title1",
        "body": "Web push body2",
        "badge": "/logo.png3"        
      }
    }
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
