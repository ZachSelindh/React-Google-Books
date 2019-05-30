import axios from "axios";

export default {
  // Gets all books
  getBooksFromAPI: function(search) {
    return axios.get("/api/google/", {
      params: {
        q: "title:" + search,
        key: "AIzaSyDW6weTjEKjfBWH8WvjmTsfvvNfxYKldqY"
      }
    });
  },

  getBooksFromDB: function() {
    return axios.get("/api/books");
  },

  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return console.log("API hit") /* axios.delete("/api/books/" + id) */;
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
