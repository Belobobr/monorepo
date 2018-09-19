// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import DefaultFlavor from '@project/default_flavor';
import Core from '@project/core';

import logo from '@project/default_flavor/lib/resources/images/logo.svg';

const { App, Configuration } = Core;

//TODO find a better way to export images from npm packages
const configuration = {
  ...DefaultFlavor.configuration,
  ui: {
    ...DefaultFlavor.configuration.ui,
    images: {
      logo: logo
    }
  }
};

//TODO can i somehow resolve configuration statically after import from separate package? Can i resolve it with perDependecy it core?
//dependency will be set depended on flavor. For example we have two package.json one - template and we can generate template with
//perDependency on particular flavor

Configuration.apply(configuration);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
