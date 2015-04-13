var app = angular.module('app', ['ngResource', 'ngRoute']);

app.controller('mainController', function($scope, $http, $location) {
   
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
	
	this.tab = 0;
	if($location.$$path == "/experiences")
    	this.tab = 1;
    else if($location.$$path == "/connaissances")
    	this.tab = 2;
    else if($location.$$path == "/scolaires")
    	this.tab = 3;
    this.selectTab = function(setTab) {
        this.tab = setTab;
        console.log("Selected tab " + setTab);
    }
    
    this.isSelected = function(tabSelected) {
        return this.tab === tabSelected;
    }
    
    $scope.$on('$viewContentLoaded', function(){
    	console.log("Page is fully loaded");
    	this.isLoaded = true;
    });
    
});

app.controller('tabController', function($scope){
	
});



app.factory('mvConnaissance', function($scope, $http, $q){
	return{
		
		retriveConnaissances: function(){
			
			console.log("Retrieving users...");
			var dfd = $q.defer();
			
			$http.post('/connaissances', {}).then(function(response){
				if(response.data.success){
					$scope.connaissances = response.data.connaissances;
					
					dfd.resolve(true);	
				}
				else{
					dfd.resolve(false);
				}
			})
		}
	}	
});

app.config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/', { templateUrl: '/partials/main', controller:'mainController'})
		.when('/accueil', { templateUrl: '/partials/main', controller:'mainController'})
		.when('/experiences', { templateUrl: '/partials/experiences', controller:'mainController'})
		.when('/connaissances', { templateUrl: '/partials/connaissances', controller:'mainController'})
		.when('/scolaires', { templateUrl: '/partials/scolaires', controller:'mainController'});
	
})

console.log('Angular module initialized');