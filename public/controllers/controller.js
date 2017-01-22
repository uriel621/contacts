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
            console.log("ADDED CONTACT", response)
            refresh()
        })
    }

    $scope.deleteContact = function (id) {
        console.log(id)
        $http.delete("/contactList/" + id).then(function(response){
        console.log("DELETED CONTACT", response)
        refresh()
        })
        
    }

    $scope.edit = function(id){
        console.log(id)
        $http.get("/contactList/" + id).then(function(response){
            $scope.contact = response.data;
        })
    }

    $scope.update = function(id){
        console.log($scope.contact._id)
        $http.put("/contactList/" + $scope.contact._id, $scope.contact).then(function(response){
            refresh()
        })
    }

    $scope.deselect = function() {
        $scope.contact = "";
    }



}])

// $scope.edit = function (contact) {
// $scope.contact = {name: contact.name, email: contact.email, number: contact.number, _id: contact._id};
// };