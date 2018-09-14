// @flow

import type { Configuration} from '@project/configuration';

let configuration = {
  uiConfiguration: {
    logo: null
  }
};

function apply(configuration: Configuration) {
  this.configuration = configuration;
}

function getCurrent(): Configuration {
  return this.configuration
}

export default {
  apply,
  getCurrent
}