import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12 body-container">
              <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/saved" component={Saved} />
              </Router>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
