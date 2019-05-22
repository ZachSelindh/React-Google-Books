import React, { Component } from "react";
import FavButton from "../FavButton";
import "./style.css";

class Book extends Component {
  render() {
    return (
      <div id={this.key} key={this.key} className="row book-content-row">
        <div className="col-md-12 col-lg-3 book-image-frame">
          <img
            className="book-image"
            alt={this.props.imageURL}
            src={this.props.imageURL}
            height="300px"
          />
        </div>
        <div className="col-md-12 col-lg-9">
          <h1 className="book-title">{this.props.title}</h1>
          <p className="book-author">By: {this.props.author}</p>
          {this.props.description ? (
            <p id="book-desc">{this.props.description}</p>
          ) : (
            <p id="book-desc">No Description Found</p>
          )}
          <a href={this.props.link} target="blank">
            <button className="btn btn-primary"> Read More </button>
          </a>
          <FavButton />
        </div>
      </div>
    );
  }
}

export default Book;
