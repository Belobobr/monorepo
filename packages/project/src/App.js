import React, { Component } from 'react';
import logo from './logo.svg';
import Another from '@tripeverywheree/uikit/lib/Another';
import Hello from '@tripeverywheree/uikit/lib/Hello';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Another />
      </div>
    );
  }
}

export default App;
