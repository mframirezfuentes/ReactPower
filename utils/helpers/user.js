const User = require("../../model/user");

function addUser(user) {
  const myUser = new User(user);
  return myUser.save();
}

function listUser() {
  return User.find();
}

function updateUser(id, password) {
  const updateUser = User.findOneAndUpdate(
    { _id: id },
    { $set: password },
    { new: true }
  );
  return updateUser;
}

function deleteUser(id) {}

module.exports = { addUser, listUser, updateUser };
