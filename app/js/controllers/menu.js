'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function MenuCtrl($log, $mdSidenav) {

  // ViewModel
  var vm = this;

  vm.open = function() {
    console.log('open left');
    $mdSidenav('menu').open()
      .then(function(){
        $log.debug("open LEFT is done");
      });
  };

  vm.close = function() {
    $mdSidenav('menu').close()
      .then(function(){
        $log.debug("close LEFT is done");
      });
  };

}

controllersModule.controller('MenuCtrl', MenuCtrl);
