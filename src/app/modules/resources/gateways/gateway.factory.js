(function() {
  'use strict';

  angular.module('app.gateway')
    .factory('GatewayResource', gatewayResource);

  gatewayResource.$inject = ['$resource'];
    function gatewayResource($resource) {
    return $resource('http://localhost:10010/api/gateway/:_id', {_id: '@_id'}, {
          update: {
        method: 'PUT'
      }
    });
  }
})();
