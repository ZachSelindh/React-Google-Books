const axios = require("axios");

module.exports = {
  findAll: function(req, res) {
    console.log("Controller Called");
    /* const { query: params } = req;
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      .then(books => res.json(books))
      .catch(err => res.status(422).json(err)); */
  }
};
