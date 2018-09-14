// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import DefaultFlavor from '@project/default_flavor';
import Core from '@project/core';

const { App, Configuration } = Core;

Configuration.apply(DefaultFlavor.configuration);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
