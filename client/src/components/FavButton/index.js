import React, { Component } from "react";
import "./style.css";

class FavButton extends Component {
  render() {
    return (
      <button className="btn btn-warning fav-button">
        <img
          alt=""
          height="20px"
          src="https://yakimaymca.org/wp-content/uploads/2018/11/Star.png"
        />
        Favorite
      </button>
    );
  }
}

export default FavButton;
