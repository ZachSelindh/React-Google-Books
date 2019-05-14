import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="page-header">
      <div id="page-row" className="row">
        <div className="col-lg-5 col-md-12">
          <a href="/">
            <h1 id="header-title">Google Books React App</h1>
          </a>
        </div>
        <div id="nav-link-bar" className="col-lg-7 col-md-12">
          <span>
            <img
              alt=""
              src="http://pngimages.net/sites/default/files/magnifying-glass-logo-png-image-77170.png"
              height="30px"
              width="30px"
            />
            <a href="/search"> Search for Books </a>
          </span>
          <span>
            <img
              alt=""
              src="https://cdn0.iconfinder.com/data/icons/mobile-and-smart-devices-4/512/171-512.png"
              height="30px"
              width="30px"
            />
            <a href="/saved"> Saved Books </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
