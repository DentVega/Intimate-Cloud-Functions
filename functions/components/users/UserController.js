const { UserAdmin } = require('./UserAdmin.js');

exports.userCreationController = user => {
  const adminUser = new UserAdmin();
  console.log(`user: ${user}`);
  console.log(`user: ${user.displayName}`);
  console.log(`user: ${user.email}`);
  return adminUser
    .registerUserEmail(user.displayName, user.email)
    .then(response => {
      console.log(`response: ${response}`);
      return 'test';
    })
    .catch(error => {
      console.error(`Error en la creacion de usuario => ${error}`);
    });
};
