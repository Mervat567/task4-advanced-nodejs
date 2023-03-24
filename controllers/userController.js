const { getUser, getUsers, addUser, updateUser, deleteUser } = require('../db/user');

const getUserById = async (req, res) => {
  try {
    const user = await getUser(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const getUsersList = async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await addUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const user = await deleteUser(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = { getUserById, getUsersList, createUser, updateUserById, deleteUserById };