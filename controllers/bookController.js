const { getBook, getBooksByUserId, getBooks, addBook, updateBook, deleteBook } = require('../db/book');

const getBookById = async (req, res) => {
  try {
    const book = await getBook(req.params.id);
    res.json(book);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const getBooksByUserIdHandler = async (req, res) => {
  try {
    const books = await getBooksByUserId(req.params.userId);
    res.json(books);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const getBooksList = async (req, res) => {
  try {
    const books = await getBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createBook = async (req, res) => {
  try {
    const book = await addBook(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateBookById = async (req, res) => {
  try {
    const book = await updateBook(req.params.id, req.body);
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteBookById = async (req, res) => {
  try {
    const book = await deleteBook(req.params.id);
    res.json(book);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = { getBookById, getBooksByUserIdHandler, getBooksList, createBook, updateBookById, deleteBookById };