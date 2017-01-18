(function() {
  'use strict';

  angular.module('app.gateway')
    .factory('GatewayResource', gatewayResource);

  gatewayResource.$inject = ['$resource', 'config'];
    function gatewayResource($resource, config) {
    var resourceURL = config.restURL + '/gateway/:_id';
    return $resource(resourceURL, {_id: '@_id'}, {
          update: {
        method: 'PUT'
      }
    });
  }
})();
