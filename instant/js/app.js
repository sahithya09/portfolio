var app = angular.module('myFolio',['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {
 
  $urlRouterProvider.otherwise("/");
  
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "templates/home.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "templates/about.html"
    })
    .state('works', {
      url: "/works",
      templateUrl: "templates/work.html"
    })
    .state('skills', {
      url: "/skills",
      templateUrl: "templates/skills.html"
    })
});

app.controller('MainController',function($scope){

});