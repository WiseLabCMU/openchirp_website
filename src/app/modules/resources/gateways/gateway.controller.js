(function() {
  'use strict';

  angular
    .module('app.gateway')
    .controller('GatewayListController', gatewayListController)
    .controller('GatewayController', gatewayController);

  gatewayListController.$inject = ['$state', 'deleteGatewayModal','GatewayResource'];
  gatewayController.$inject = ['config','$state', '$stateParams', 'shortHistory', 'notificator', 'GatewayResource'];

  function gatewayListController($state, deleteGatewayModal, GatewayResource) {
    var vm = this;
    vm.gateways = GatewayResource.query(); //fetch all gateways
    vm.delete = deleteGatewayModal.getDeleteMethod(vm.gateways);
  }

 function gatewayController(config, $state, $stateParams, shortHistory, notificator, GatewayResource) {
  var vm = this;
  vm.title = config.appTitle;
  vm.gateway =  $stateParams.id ? GatewayResource.get({id: $stateParams.id}) : {};
  vm.showReturnBtn = vm.gateway.id && shortHistory.from.state.name;

    vm.update = function() {
      GatewayResource.update(vm.gateway, function(p) {
        notificator.success('Gateway was successfully updated');
      });
    };

    vm.return = function() {
        $state.go(shortHistory.from.state.name, shortHistory.from.params);
    };

    vm.save = function() {
      GatewayResource.save(vm.gateway, function(savedGateway) {
        shortHistory.goTo('from');
        notificator.success('Gateway was successfully saved');
      });
    };
  }
})();
