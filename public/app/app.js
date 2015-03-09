var app = angular.module('app', []);

app.controller('mainCtrl', function($scope) {
   
   this.tab = 0;
   $scope.tabs = [
       {
           id: 0,
           name: "Main"
       },
       {
           id: 1,
           name: "Profile"
       }
       ]
    this.selectTab = function(setTab) {
        this.tab = setTab;
        console.log("Selected tab " + setTab);
    }
    this.isSelected = function(tabSelected) {
        return this.tab === tabSelected;
    }
});

console.log('Angular module initialized');