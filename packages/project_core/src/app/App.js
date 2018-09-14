// @flow

import React, { Component } from 'react';
import UiKit from '@tripeverywheree/uikit';
import Configuration from './../configuration';

const {Button, Avatar} = UiKit;

type AppProps = {

}

class App extends Component<AppProps> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Configuration.getCurrent().uiConfiguration.logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button title="some title"/>
      </div>
    );
  }
}

export default App;
