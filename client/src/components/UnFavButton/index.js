import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class UnFavButton extends Component {
  handleClick = () => {
    return function() {
      API.deleteBook(this.props.mongoID)
        .then(res => console.log(res))
        .then(() => this.props.loadBooks())
        .catch(err => console.log(err));
    };
  };

  render() {
    return (
      <button
        onClick={this.handleClick().bind(this)}
        className="btn btn-danger unfav-button"
      >
        <img
          alt=""
          height="20px"
          src="https://cdn2.iconfinder.com/data/icons/cleaning-19/30/30x30-10-512.png"
        />
        Delete Favorite
      </button>
    );
  }
}

export default UnFavButton;
