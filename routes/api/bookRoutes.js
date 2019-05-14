const express = require("express");
const router = express.Router();

// Book model
const Book = require("../../models/Book");

// @route   GET api/books
// @desc    Get all Books
// @acess   Public
router.get("/", (req, res) => {
  Book.find({})
    // possible sort area
    .then(books => res.json(books));
});

// @route   POST api/books
// @desc    Create a Book
// @acess   Public
router.post("/", (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author
  });

  newBook.save().then(book => res.json(book));
});

// @route   POST api/books
// @desc    Delete a Book
// @acess   Public
router.delete("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then(book => book.remove().then(() => res.json({ Sucess: true })))
    .catch(err => console.log(err));
});

module.exports = router;
