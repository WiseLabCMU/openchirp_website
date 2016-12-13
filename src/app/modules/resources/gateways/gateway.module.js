(function() {
  'use strict';

  var module = angular.module('app.gateway', ['ui.router', 'ngResource', 'app.common']);

  module.config(
  function appConfig($stateProvider) {
    $stateProvider
      .state('app.gateways', {
        url: '/gateways/:type',
        templateUrl: 'app/modules/resources/gateways/list.html',
        controller: 'GatewayListController as vm'
      })
      .state('app.editGateway', {
        url: '/gateways/edit/:id',
        templateUrl: 'app/modules/resources/gateway/edit.html',
        controller: 'GatewayController',
        controllerAs: 'vm'
      });
  })
})();
