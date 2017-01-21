var ever = angular.module("contactApp", []);

ever.controller("AppCtrl", ["$scope", "$http", function ($scope, $http) {
    console.log("another test")

    $http.get('/contactList').then(function(response) {
    console.log('I got the requested data');
    $scope.contactList = response.data;
  });

}])