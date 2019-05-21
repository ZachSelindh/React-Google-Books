const axios = require("axios");

module.exports = {
  findBooks: function(req, res) {
    var { query: params } = req;
    axios
      .get("https://www.googleapis.com/books/v1/volumes?", { params })
      .then(response => res.json(response.data.items))
      .catch(err => console.log(err));
  }
};
