import React, { Component } from "react";
import "./style.css";

class FavButton extends Component {
  render() {
    return (
      <a href={this.props.link} target="blank">
        <button className="btn btn-primary"> Read More </button>
      </a>
    );
  }
}

export default FavButton;
