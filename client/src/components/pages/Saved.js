import React from "react";
import Book from "../Book";

function Saved(props) {
  return (
    <div>
      <h1 className="body-title">Saved Books</h1>
      <p className="body-text">Here is where saved books will appear.</p>
      <br />
      <Book />
    </div>
  );
}

export default Saved;
