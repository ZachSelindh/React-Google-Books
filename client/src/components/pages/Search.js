import React from "react";

function Search(props) {
  return (
    <div>
      <h1 className="body-title">Search</h1>
      <p className="body-text">
        {" "}
        Use the searchbar to make a call to find books that match your criteria{" "}
      </p>
      <form id="search-bar-z" onSubmit={props.onSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          onChange={props.onChange}
          value={props.search}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Search;
