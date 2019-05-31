import React, { Component } from "react";
import FavButton from "../FavButton";
import UnFavButton from "../UnFavButton";
import ReadMoreButton from "../ReadMoreButton";
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
          {this.props.author ? (
            <p className="book-author"> By: {this.props.author.join(", ")}</p>
          ) : (
            <p className="book-author">No Author Found</p>
          )}

          {this.props.description ? (
            <p id="book-desc">{this.props.description}</p>
          ) : (
            <p id="book-desc">No Description Found</p>
          )}
          <div className="row">
            <ReadMoreButton {...this.props} />
            {this.props.favorited ? (
              <UnFavButton {...this.props} />
            ) : (
              <FavButton {...this.props} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
