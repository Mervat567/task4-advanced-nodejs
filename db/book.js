const { Book } = require('../models/bookModel');
const { getUser } = require('../models/userModel');

const getBook = async (id) => {
  const book = await Book.findById(id);
  if (!book) throw new Error('Book not found');
  return book;
};

const getBooksByUserId = async (userId) => {
  await getUser(userId); // make sure the user exists before returning their books
  const books = await Book.find({ userId });
  return books;
};

const getBooks = async () => {
  const books = await Book.find();
  return books;
};

const addBook = async ({ name, title, numOfPages, userId }) => {
  await getUser(userId); // make sure the user exists before adding their book
  const book = new Book({ name, title, numOfPages, userId });
  await book.save();
  return book;
};

const updateBook = async (id, { name, title, numOfPages, userId }) => {
  const book = await getBook(id);
  if (name) book.name = name;
  if (title) book.title = title;
  if (numOfPages) book.numOfPages = numOfPages;
  if (userId) {
    await getUser(userId); // make sure the new user exists before changing the book's userId
    book.userId = userId;
  }
  await book.save();
  return book;
};

const deleteBook = async (id) => {
  const book = await getBook(id);
  await book.remove();
  return book;
};

module.exports = { getBook, getBooksByUserId, getBooks, addBook, updateBook, deleteBook };