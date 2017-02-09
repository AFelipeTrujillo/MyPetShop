  var app = angular.module('MyPetShopApp',['ui.router']);

 app.config(function($stateProvider, $urlRouterProvider){
  
  var homeState = {
    name : 'home',
    url : '/home',
    templateUrl : '/templates/home.html'
  }

  $stateProvider.state(homeState);
  $urlRouterProvider.otherwise("home");
 });

  app.controller('WelcomeController', function($scope){
    $scope.title = 'MyPetShopApp';
    $scope.welcomeMsg = 'Hi welcome to my pet shop! We <3 pets, Enjoy :)';
  });
