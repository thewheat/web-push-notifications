const {google} = require('googleapis');

const SCOPES = "https://www.googleapis.com/auth/firebase.messaging";
const SERVICE_ACCOUNT_JSON_FILE = './YOUR_FIREBASE_ADMIN_SDK_SERVICE_ACCOUNT.json'
// Authentication detailed here https://firebase.google.com/docs/cloud-messaging/auth-server
// To create the JSON file go to // https://console.firebase.google.com/u/0/project/_/settings/serviceaccounts/adminsdk
// - Project Settings > Service Account > Firebase Admin SDK > Generate new private key
// Then run `node index.js` to show the access token
 function getAccessToken() {
  return new Promise(function(resolve, reject) {
    var key = require(SERVICE_ACCOUNT_JSON_FILE);
    var jwtClient = new google.auth.JWT(
      key.client_email,
      null,
      key.private_key,
      SCOPES,
      null
    );
    jwtClient.authorize(function(err, tokens) {
      if (err) {
        reject(err);
        return;
      }
      resolve(tokens.access_token);
    });
  });
}

getAccessToken().then(function(err, tokens){
      if (err) {
        console.error(err);
        return;
      }
      console.log(tokens);
});