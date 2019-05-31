import React, { Component } from "react";
import API from "../../utils/API";
import BookComp from "../Book";

class Saved extends Component {
  constructor() {
    super();
    this.state = {
      savedBooks: []
    };
  }

  loadBooks = () => {
    API.getBooksFromDB()
      .then(res => this.setState({ savedBooks: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.loadBooks();
  };

  render() {
    return (
      <div>
        <h1 className="body-title">Saved Books</h1>
        {this.state.savedBooks.length ? (
          this.state.savedBooks.map(Book => {
            return (
              <BookComp
                key={Book._id}
                googleID={Book.googleID}
                mongoID={Book._id}
                title={Book.title}
                author={Book.author}
                description={Book.description}
                imageURL={Book.imageURL}
                link={Book.link}
                favorited={Book.favorited}
                loadBooks={this.loadBooks()}
              />
            );
          })
        ) : (
          <h3 id="no-result-text">No Favorites Saved</h3>
        )}
      </div>
    );
  }
}

export default Saved;
