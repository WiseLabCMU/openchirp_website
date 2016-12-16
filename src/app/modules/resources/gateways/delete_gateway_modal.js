(function() {
  'use strict';

  var module = angular.module('app.gateway');

  module.service('deleteGatewayModal', deleteGatewayModal);

  deleteGatewayModal.$inject = ['GatewayResource', 'commonModal', 'notificator'];
  function deleteGatewayModal(GatewayResource, commonModal, notificator) {
    var that = this;
    this.modalOptions = {
      closeButtonText: 'Cancel',
      actionButtonText: 'Delete',
      headerText: 'Confirm gateway deletion',
      bodyText: 'The gateway will be deleted permanently, do you want to continue?'
    };
    this.modalDefaults = {
      windowClass: 'small-modal'
    };

    this.getDeleteMethod = function(gateways) {
      return function(gateway) {
        commonModal.show(that.modalDefaults,that.modalOptions).then(function() {
          GatewayResource.delete(gateway, function() {
            var index = gateways.indexOf(gateway);
            gateways.splice(index,1);
            notificator.success('Gateway was successfully deleted');
          });
        });
      };
    };
  }
})();
