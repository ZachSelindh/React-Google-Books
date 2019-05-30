import React, { Component } from "react";
import API from "../../utils/API";
import BookComp from "../Book";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      books: [],
      foundBooks: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ search: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.search.length) {
      var searchedFor = this.state.search;
      API.getBooksFromAPI(searchedFor)
        .then(res =>
          this.setState({
            foundBooks: res.data
          })
        )
        .catch(err => console.log(err));
      document.getElementById("search-bar-z").reset();
      this.setState({ search: "" });
    }
  };

  render() {
    return (
      <div>
        <h1 className="body-title">Search</h1>
        <p className="body-text">
          {" "}
          Use the searchbar to make a call to find books that match your
          criteria{" "}
        </p>
        <form id="search-bar-z" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Book Title"
            onChange={this.handleChange}
            value={this.state.search}
          />
          <input type="submit" value="Submit" />
        </form>
        <div id="book-render-area" className="col-12" />
        {this.state.foundBooks.length ? (
          this.state.foundBooks.map(Book => {
            return (
              <BookComp
                key={Book.id}
                googleID={Book.id}
                title={Book.volumeInfo.title}
                author={Book.volumeInfo.authors[0]}
                description={Book.volumeInfo.description}
                imageURL={Book.volumeInfo.imageLinks.thumbnail}
                link={Book.volumeInfo.infoLink}
              />
            );
          })
        ) : (
          <h3 id="no-result-text">No Results to Display</h3>
        )}
      </div>
    );
  }
}

export default Search;
