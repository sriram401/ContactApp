var app=angular.module("ContactApp", ["ngRoute"]);

app.config(['$locationProvider', function($locationProvider) {
	  $locationProvider.hashPrefix('');
	}]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "partials/main.html",
        controller: "MainController",
        controllerAs: "ctrl"
    })
    .when("/page1", {
        templateUrl : "partials/page1.html",
        controller: "Page1Controller",
        controllerAs: "ctrl"
        
    })
    .when("/page2", {
        templateUrl : "partials/page2.html",
            controller: "Page2Controller",
            controllerAs: "ctrl"
    })
    .when("/page3", {
        templateUrl : "partials/page3.html",
        controller: "Page3Controller",
        controllerAs: "ctrl"

    })
    .otherwise(
    {
    	template : "<p class=\"label-error\">Error , Page Not found</p>"
    });
});





