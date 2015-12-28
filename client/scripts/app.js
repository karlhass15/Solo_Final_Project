var myApp = angular.module("myApp", ['ngRoute', 'ngAnimate', 'ngMaterial']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/header', {
            templateUrl: "/assets/views/templates/header.html"
        }).
        when('/hero', {
            templateUrl: "/assets/views/templates/hero.html",
            controller: "HeroController"
        }).
        when('/pinder', {
            templateUrl: "/assets/views/templates/pinder.html"
        }).
        when('/about', {
            templateUrl: "/assets/views/templates/about.html"
        }).
        when('/portfolio', {
            templateUrl: "/assets/views/templates/portfolio.html",
            controller: "GalleryController"
        }).
        when('/contact', {
            templateUrl: "/assets/views/templates/contact.html",
            controller: "ContactFormController"
        }).
        when('/footer', {
           templateUrl: "/assets/views/templates/footer.html",
            //controller: "ScrollControl"
    })
}]);



