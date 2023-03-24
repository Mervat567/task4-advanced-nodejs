const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  numOfPages: {
    type: Number,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Book = model('Book', bookSchema);

module.exports = Book;