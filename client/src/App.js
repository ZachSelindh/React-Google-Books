import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";
import API from "./utils/API";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      books: [],
      savedBooks: ["Test"]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ search: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.search.length) {
      var searchedFor = this.state.search;
      API.getBooksFromAPI(searchedFor)
        .then(res => this.setState({ savedbooks: res.data }))
        .catch(err => console.log(err));
      document.getElementById("search-bar-z").reset();
      this.setState({ search: "" });
    }
  };

  componentDidMount = () => {};

  render() {
    return (
      <Wrapper>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12 body-container">
              <Router>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/search"
                  render={() => (
                    <Search
                      value={this.state.search}
                      onChange={this.handleChange.bind(this)}
                      onSubmit={this.handleSubmit.bind(this)}
                    />
                  )}
                />
                <Route
                  exact
                  path="/saved"
                  render={() => (
                    <Saved savedBooksProp={this.state.savedBooks} />
                  )}
                />
              </Router>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
