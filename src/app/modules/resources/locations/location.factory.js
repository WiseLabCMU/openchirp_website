(function() {
  'use strict';

  angular.module('app.location')
    .factory('LocationResource', locationResource);

  locationResource.$inject = ['$resource', 'config'];
    function locationResource($resource, config) {
    var resourceURL = config.restURL + '/location/:_id';
    return $resource(resourceURL, {_id: '@_id'}, {
          update: {
        method: 'PUT'
      }
    });
  }
})();