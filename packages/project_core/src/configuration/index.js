// @flow

//TODO move index to general dependency

type Configuration =  {

}

let configuration = {};

function configure(configuration: Configuration) {
  this.configuration = configuration;
}

export default {
  configure
}