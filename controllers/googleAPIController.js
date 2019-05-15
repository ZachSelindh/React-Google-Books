const axios = require("axios");

module.exports = {
  findBooks: function(req, res) {
    var { query: params } = req;
    axios
      .get("https://www.googleapis.com/books/v1/volumes?", { params })
      /* .then(results =>
        results.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      ) */
      /* .then(response => console.log(response.data.items)) */
      .then(response => res.json(response.data.items))
      .catch(err => console.log(err));
  }
};
