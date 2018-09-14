// @flow

//TODO move index to general dependency

type UiConfiguration = {
  logo: ?string
}

type Configuration =  {
  uiConfiguration: UiConfiguration
}

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