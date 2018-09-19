// @flow

import * as React from 'react';
import UiKit from '@tripeverywheree/uikit';
import Configurator from '../configurator';
import type { Configuration } from "@project/configuration";
import type { ButtonProps } from "../../../uikit/lib";
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

//first approach - ui components can't be overriden
const { Avatar } = UiKit;

type AppProps = {

}

class App extends React.Component<AppProps> {

  configuration: Configuration;
  ButtonFromConfiguration: React.ComponentType<ButtonProps>;

  constructor(props: AppProps) {
    super(props);
    //second approach - ui components configured with flavors (configuration for customer), but i can't resolve it statically
    this.configuration = Configurator.getCurrent();
    this.ButtonFromConfiguration = this.configuration.ui.buttonComponent;
  }


  render() {
    const {configuration, ButtonFromConfiguration} = this;

    return (
      <div className="App">
        <header className="App-header">
          <img src={this.configuration.ui.images.logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button bsStyle="primary">Primary</Button>
        <ButtonFromConfiguration title="some title"/>
      </div>
    );
  }
}

export default App;
