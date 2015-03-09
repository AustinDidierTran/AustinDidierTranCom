var app = angular.module('app', []);

app.controller('mainCtrl', function($scope) {
   $scope.tabs = [
       {
           id: 1,
           name: "Main"
       },
       {
           id:2,
           name: "Profile"
       }
       ]
});

console.log('Angular module initialized');