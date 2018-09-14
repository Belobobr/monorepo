// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import registerServiceWorker from './registerServiceWorker';

import Core from '@project/core';

const { App, Configuration } = Core;

Configuration.apply({
  uiConfiguration: {
    logo: logo
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
