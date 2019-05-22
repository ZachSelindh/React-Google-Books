const express = require("express");
const router = express.Router();

// Book model
const Book = require("../../models/Book");

// @route   GET api/books
// @desc    Get all Books
// @access   Public
router.get("/", (req, res) => {
  Book.find({})
    // possible sort area
    .then(books => res.json(books));
});

// @route   POST api/books
// @desc    Create a Book
// @access   Public
router.post("/", (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    imageURL: req.body.imageURL,
    link: req.body.link
  });

  newBook.save().then(book => res.json(book));
});

// @route   POST api/books
// @desc    Delete a Book
// @access   Public
router.delete("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then(book => book.remove().then(() => res.json({ Sucess: true })))
    .catch(err => console.log(err));
});

module.exports = router;