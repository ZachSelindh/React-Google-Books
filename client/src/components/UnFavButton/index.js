import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class UnFavButton extends Component {
  handleClick = () => {
    return function() {
      /* API.saveBook({
        googleID: this.props.googleID,
        title: this.props.title,
        author: this.props.author,
        description: this.props.description,
        imageURL: this.props.imageURL,
        link: this.props.link,
        favorited: true
      })
        .then(console.log(`${this.props.title} saved as a favorite!`))
        .catch(err => console.log(err)); */
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
