import React, { Component } from "react";

import { ConnectedSearchForm } from "components/container/ConnectedSearchForm";
import { ConnectedSearchResults } from "components/container/ConnectedSearchResults";
import { ConnectedAlertMessage } from "components/container/ConnectedAlertMessage";

import logo from "./logo.svg";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <img src={logo} className="App__logo" alt="logo" />
          <ConnectedSearchForm />
        </header>
        <main>
          <ConnectedAlertMessage />
          <ConnectedSearchResults />
        </main>
      </div>
    );
  }
}

export default App;
