angular.module('dbgame').controller('mainCtrl', ['$scope', function($scope){
    MC = $scope;
    $scope.message = 'this is a fkn message';
    $scope.sayHi = function(){
        console.log('what the fuck man');
    };
}])
