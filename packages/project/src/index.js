// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import DefaultFlavor from '@project/default_flavor';
import Core from '@project/core';

const { App, Configuration } = Core;

//TODO can i somehow resolve configuration statically after import from separate package? Can i resolve it with perDependecy it core?
//dependency will be set depended on flavor. For example we have two package.json one - template and we can generate template with
//perDependency on particular flavor

Configuration.apply(DefaultFlavor.configuration);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
