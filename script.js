var app = angular.module("calcApp", []);

app.controller('Display', function($scope) {
  var vm = this,
    prevNum = '',
    currentState = true,
    previousOperator;

  vm.total = 'The total';

  //TODO define map for operators
  var operatorMap = {
    '+': function(a, b) {
        return parseInt(a) + parseInt(b);
      }
      //add more operators
  };
  // $scope.total= $scope.num;
  //can access num over here



});
