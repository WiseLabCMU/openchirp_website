(function() {
  'use strict';

  var module = angular.module('app.gateway', ['ui.router', 'ngResource', 'app.common']);

  module.config(appConfig);

  appConfig.$inject = ['$stateProvider'];

  function appConfig($stateProvider) {
    $stateProvider
      .state('app.listGateways', {
        url: '/gateways/:type',
        templateUrl: 'app/modules/resources/gateways/list.html',
        controller: 'GatewayListController as vm'
      })
      .state('app.editGateway', {
        url: '/gateways/edit/:id',
        templateUrl: 'app/modules/resources/gateways/edit.html',
        controller: 'GatewayController',
        controllerAs: 'vm'
      });
  }
})();
