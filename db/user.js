const { User } = require('../models/userModel');

const getUser = async (id) => {
  const user = await User.findById(id);
  if (!user) throw new Error('User not found');
  return user;
};

const getUsers = async () => {
  const users = await User.find();
  return users;
};

const addUser = async ({ name, email, password, address }) => {
  const user = new User({ name, email, password, address });
  await user.save();
  return user;
};

const updateUser = async (id, { name, email, password, address }) => {
  const user = await getUser(id);
  if (name) user.name = name;
  if (email) user.email = email;
  if (password) user.password = password;
  if (address) user.address = address;
  await user.save();
  return user;
};

const deleteUser = async (id) => {
  const user = await getUser(id);
  await user.remove();
  return user;
};

module.exports = { getUser, getUsers, addUser, updateUser, deleteUser };