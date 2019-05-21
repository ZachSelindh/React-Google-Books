import React, { Component } from "react";
import "./style.css";

class Book extends Component {
  render() {
    return (
      <div id={this.key} key={this.key} className="row">
        <div className="col-12">
          <h1 className="book-title">{this.props.title}</h1>
          <p className="book-author">By: {this.props.author}</p>
          <div className="col-3">
            <img
              alt={this.props.imageURL}
              src={this.props.imageURL}
              height="100px"
            />
          </div>
          <div className="col-9">
            <p className="book-desc">{this.props.description}</p>
            <a href={this.props.link}>Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
