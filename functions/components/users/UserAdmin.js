const admin = require('firebase-admin');

class UserAdmin {
  registerUserEmail(name, email) {
    console.log('se registra email');
    return admin
      .firestore()
      .collection('test')
      .add({
        name: name,
        email: email
      });
  }
}

exports.UserAdmin = UserAdmin;
