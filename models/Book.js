const mongoose = require("mongoose");
const validator = require("mongoose-validator");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  image: {
    type: String,
    required: true,
    validate: {
      validator: value =>
        validator.isURL(value, {
          protocols: ["http", "https", "ftp"],
          require_tld: true,
          require_protocol: true
        }),
      message: "Image must be a Valid URL"
    }
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: value =>
        validator.isURL(value, {
          protocols: ["http", "https", "ftp"],
          require_tld: true,
          require_protocol: true
        }),
      message: "Link must be a Valid URL"
    }
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
