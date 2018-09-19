// @flow

import React from 'react';
import type { Configuration } from '@project/configuration';
import type { ButtonProps } from '@tripeverywheree/uikit';

//TODO write task for copy resources
// import logo from './logo.svg';

class Button extends React.Component<ButtonProps> {
  render() {
    return <div>Button Component</div>;
  }
}

let configuration: Configuration = {
  ui: {
    images: null,
    buttonComponent: Button
  },
  api: {
    host: '',
    projectUrl: '',
    port: ''
  }
};

export default {
  configuration
};
