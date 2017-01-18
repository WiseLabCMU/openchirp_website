(function() {
  'use strict';

  var common = angular.module('app.common');

  var config = {
    name: 'OpenChirp',
    appTitle: 'OpenChirp: CMU LoRa network',
    version: '0.1.1',
    restURL: 'http://localhost:10010/api'
  };

  common.constant('config', config);
})();
