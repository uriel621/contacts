var ever = angular.module("contactApp", []);

ever.controller("AppCtrl", ["$scope", "$http", function ($scope, $http) {
    console.log("another test")

    var refresh = function () {
        $http.get('/contactList').then(function (response) {
            console.log('I got the requested data');
            $scope.contactList = response.data;
            $scope.contact = null
        });
    }
    
    refresh()

    $scope.addContact = function () {
        console.log($scope.contact)

        $http.post("/contactList", $scope.contact).then(function (response) {
            console.log("===ADDED CONTACT===", response)
            refresh()
        })
    }

    $scope.deleteContact = function (id) {
        console.log(id)
        $http.delete("/contactList/" + id).then(function(response){
        console.log("===DELETED CONTACT===", response)
        refresh()
        })
        
    }

}])