var app=angular.module("ContactApp", ["ui.router"]);

app.config(['$locationProvider', function($locationProvider) {
	  $locationProvider.hashPrefix('');
	}]);

app.config(function($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

	
	$stateProvider
    .state("main", {
        url : '',
    	templateUrl : "partials/main.html",
        controller: "MainController",
        controllerAs: "ctrl"
    })
    .state("page1", {
        url : "/page1",
        templateUrl : "partials/page1.html",
        controller: "Page1Controller",
        controllerAs: "ctrl"
        
    })
    .state("page2", {
        url : "/page2",
        templateUrl : "partials/page2.html",
        controller: "Page2Controller",
        controllerAs: "ctrl"
    })
    .state("page3", {
        url : "/page3",
        templateUrl : "partials/page3.html",
        controller: "Page3Controller",
        controllerAs: "ctrl"

    })
    .state("page4", {
        url : "/page4",
        templateUrl : "partials/page4.html",
        controller: "Page4Controller",
        controllerAs: "ctrl"

    })
    .state('notFound', {
        url: '{path:.*}',
        template : "<p class=\"label-error\">Error , Page Not found</p>"
    });
//    .otherwise(
//    {
//    	template : "<p class=\"label-error\">Error , Page Not found</p>"
//    });
    
    
});





