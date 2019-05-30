const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  googleID: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: Array, required: false, default: "No Author Found" },
  description: {
    type: String,
    required: false,
    default: "No Description Found"
  },
  imageURL: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false
  },
  favorited: {
    type: Boolean,
    default: true
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
