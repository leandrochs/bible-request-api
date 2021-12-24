import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Chapters from "./Chapters";
import Home from "./Home";
import { Login } from "./Login";
import { SearchByWord } from "./SearchByWord";

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      received: [],
    }

    this.renderHome = this.renderHome.bind(this);
    this.renderBookDetails = this.renderBookDetails.bind(this);
    this.renderSearchByWord = this.renderSearchByWord.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
  }

  renderHome(match) {
    return (
      <Home />
    );
  }

  renderBookDetails(match) {
    const { selectedBook } = this.props;

    return(
      <Chapters match={ match } selectedBook={ selectedBook } />
    );
  }
 
  renderSearchByWord(match) {
    const { received } = this.props;
    return <SearchByWord match={ match } received={ received } />;
  }

  renderLogin(match) {

    return (
      <Login />
    )
  }


  render() {

    return(
      <Switch>
        <Route
          exact
          path="/"
          render={ ({ match }) => this.renderHome(match) }
        />
        <Route
          // exact
          path="/acf/:id"
          render={ ({ match }) => this.renderBookDetails(match) }
        />
        <Route
          path="/search/:id"
          render={ ({ match }) => this.renderSearchByWord(match) }
        />
        <Route
          path="/login"
          render={ ({ match }) => this.renderLogin(match) }
        />
      </Switch>
    )
  }
}

export default Principal;
