(function() {
  'use strict';

  angular.module('app.gateway')
    .factory('gatewayResource', function ($resource) {
    return $resource('/api/gateway/:id', {id: '@id'}, {
      update: {
        method: 'PUT'
      }
    });
  }
})();