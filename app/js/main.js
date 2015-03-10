'use strict';

// external modules

// chart modules
require('d3');
require('nvd3');
global.Chart = require('Chart.js');

// angular modules
require('angular');
require('angular-aria');
require('angular-animate');
require('angular-ui-router')
require('angular-material');;
require('angular-chart.js');
require('angularjs-nvd3-directives');

// external modules end

// my modules
require('./templates');
require('./controllers/_index');
require('./services/_index');
require('./directives/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'ngMaterial',
    'chart.js',
    'nvd3ChartDirectives',
    'templates',
    'app.controllers',
    'app.services',
    'app.directives'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  // verify these libs are properly included
  // console.log(angular);
  // console.log(Chart);
  // console.log(d3);
  // console.log(nv);

  angular.module('app').constant('AppSettings', require('./constants'));

  angular.module('app').config(require('./routes'));

  angular.module('app').run(require('./on_run'));

  angular.bootstrap(document, ['app']);

});
