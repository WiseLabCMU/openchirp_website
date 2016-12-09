(function() {
  'use strict';

  var core = angular.module('app.core');

  var config = {
    name: 'OpenChirp',
    appTitle: 'OpenChirp: CMU LoRa network',
    version: '0.1.1'
  };

  core.value('config', config);
})();
