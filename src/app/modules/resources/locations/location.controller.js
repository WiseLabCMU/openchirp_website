(function() {
  'use strict';

  angular
    .module('app.location')
    .controller('LocationListController', locationListController)
    .controller('LocationController', locationController);

  locationListController.$inject = ['$state','LocationResource'];
  locationController.$inject = ['config','$state', '$stateParams', 'shortHistory', 'notificator', 'LocationResource'];

  function locationListController($state,  LocationResource) {
    var vm = this;
    vm.gateways = LocationResource.query(); //fetch all gateways
   // vm.delete = deleteGatewayModal.getDeleteMethod(vm.gateways);
  }

 function locationController(config, $state, $stateParams, shortHistory, notificator, LocationResource) {
  var vm = this;
  vm.location =  $stateParams.id ? LocationResource.get({_id: $stateParams.id}) : {};

    vm.update = function() {
      LocationResource.update(vm.location, function(p) {
        notificator.success('Location was successfully updated');
      });
    };

    vm.return = function() {
        $state.go(shortHistory.from.state.name, shortHistory.from.params);
    };

    vm.save = function() {
      LocationResource.save(vm.location, function(savedLocation) {
        shortHistory.goTo('from');
        notificator.success('Location was successfully created');
      });
    };
  }
})();