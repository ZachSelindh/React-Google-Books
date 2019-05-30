const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  googleID: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
