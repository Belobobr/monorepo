// @flow

import React from 'react';
import type { Configuration } from '@project/configuration';
import type { ButtonProps } from '@tripeverywheree/uikit';
import logo from './logo.svg';

//TODO write task for copy resources
// import logo from './logo.svg';

class Button extends React.Component<ButtonProps> {
  render() {
    return <div>Button Component</div>;
  }
}

let configuration: Configuration = {
  uiConfiguration: {
    logo: logo,
    buttonComponent: Button
  },
  apiConfiguration: {
    host: '',
    projectUrl: '',
    port: ''
  }
};

export default {
  configuration
};
