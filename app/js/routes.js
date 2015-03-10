'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    views: {
      "": {
        controller: 'ExampleCtrl as home',
        templateUrl: 'home.html'
      }
    },
    title: 'Home'
  })
  .state('charts', {
    url: '/charts',
    views: {
      "": {
        controller: 'ChartsCtrl as ctrl',
        templateUrl: 'charts.html'
      }
    },
    title: 'Charts'
  });

  $urlRouterProvider.otherwise('/');
}

module.exports = Routes;
