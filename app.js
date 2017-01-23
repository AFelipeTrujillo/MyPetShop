  var app = angular.module('MyPetShopApp',[]);

  app.controller('WelcomeController', function($scope){
    $scope.title = 'MyPetShopApp';
    $scope.welcomeMsg = 'Hi welcome to my pet shop! We <3 pets, Enjoy :)';
  });
