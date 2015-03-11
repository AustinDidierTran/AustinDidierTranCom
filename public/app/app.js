var app = angular.module('app', []);

app.controller('mainController', function($scope, $http, $location) {
   
    this.tab = 0;
   
    $http.get($location.path + '/../JSON/socials.json').success(function(data){
	    $scope.socials = data;
	    console.log(data);
	});
	
	
	$http.get($location.path + '/../JSON/tabs.json').success(function(data) {
	    $scope.tabs = data;
		console.log(data);
	});
	
	$http.get('/../JSON/experiences.json').success(function(data) {
		$scope.experiences = data;
		console.log(data);
	});
	$http.get('JSON/scolaires.json').success(function(data) {
		$scope.scolaires = data;
		console.log(data);
	});
	$http.get('JSON/articles.json').success(function(data) {
		$scope.articles = data;
		console.log(data);
	});
	$http.get('JSON/connaissances.json').success(function(data) {
		$scope.connaissances = data;
		console.log(data);
	});
	$http.get('JSON/footer.json').success(function(data) {
		$scope.footer = data;
		console.log(data);
	});
		
    this.selectTab = function(setTab) {
        this.tab = setTab;
        console.log("Selected tab " + setTab);
    }
    
    this.isSelected = function(tabSelected) {
        return this.tab === tabSelected;
    }
});

console.log('Angular module initialized');