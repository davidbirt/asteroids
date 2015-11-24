var app = angular.module('dbgame', ['ngRoute', function($routeProvider){
  $routeProvider.when('/dingaling', { templateUrl: '/test1' });
  $routeProvider.when('/cunt', { templateUrl: '/controllers' });
   $routeProvider.when('/dir', { templateUrl: '/directives' });
}])


app.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[');
  $interpolateProvider.endSymbol(']}');
}]);
