const functions = require('firebase-functions');
const admin = require('firebase-admin');
const userController = require('./components/users/UserController.js');

admin.initializeApp();
admin.firestore().settings({ timestampsInSnapshots: true });

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

exports.creaccionUsuario = functions.auth
  .user()
  .onCreate(userController.userCreationController);
