// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import UiKit from '@tripeverywheree/uikit/lib';
import Core from '@project/core';

ReactDOM.render(<Core.App />, document.getElementById('root'));
registerServiceWorker();
