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

  /* componentDidMount = () => {
    API.
  } */

  render() {
    return (
      <div>
        <h1 className="body-title">Saved Books</h1>
        <p className="body-text">Here is where found books will appear.</p>
        <br />
      </div>
    );
  }
}

export default Saved;
