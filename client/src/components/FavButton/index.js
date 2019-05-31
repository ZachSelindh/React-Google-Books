import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class FavButton extends Component {
  constructor() {
    super();
    this.state = {
      hidden: false
    };
  }
  handleClick = () => {
    return function() {
      this.setState({ hidden: true });
      API.saveBook({
        googleID: this.props.googleID,
        title: this.props.title,
        author: this.props.author,
        description: this.props.description,
        imageURL: this.props.imageURL,
        link: this.props.link
      })
        .then(console.log(`${this.props.title} saved as a favorite!`))
        .catch(err => console.log(err));
    };
  };

  render() {
    return (
      <div>
        {this.state.hidden ? (
          <button className="btn btn-success fav-button">Favorited!</button>
        ) : (
          <button
            onClick={this.handleClick().bind(this)}
            className="btn btn-warning fav-button"
          >
            <img
              alt=""
              height="20px"
              src="https://yakimaymca.org/wp-content/uploads/2018/11/Star.png"
            />
            Favorite
          </button>
        )}
      </div>
    );
  }
}

export default FavButton;
