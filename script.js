var app = angular.module("calcApp",[]);

app.controller('display', function($scope) {
    // var vm = this;
    // vm.total = 'The total';

    $scope.total= 'scope total!';
    // $scope.num = ''
    $scope.add ='';
    $scope.subtract= '';
    $scope.multiply= '';

  });
