  var app = angular.module('MyPetShopApp',['ui.router']);

 app.config(function($stateProvider, $urlRouterProvider){
  
  var homeState = {
    name : 'home',
    url : '/home',
    templateUrl : '/templates/home.html'
  }

  var productListState = {
    name : 'product-list',
    url : '/product-list',
    templateUrl : '/templates/product-list.html'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(productListState);
  $urlRouterProvider.otherwise("home");
 });

app.controller('WelcomeController', function($scope){
  $scope.title = 'MyPetShopApp';
  $scope.welcomeMsg = 'Hi welcome to my pet shop! We <3 pets, Enjoy :)';
});

app.controller('ProductListController', function($scope){

  $scope.products = __data();
  $scope.showPicture = true;
  $scope.hidePicture = function(){
    $scope.showPicture = !$scope.showPicture;
  }
    
});

function __data()
{
  return [
  {
    "_id": "58a1bcecc44f8070044f664d",
    "index": 0,
    "guid": "787f2922-3c4e-4483-8026-bafc75e2fa92",
    "name": "ullamco esse",
    "isActive": false,
    "price": "$2,020.20",
    "picture": "http://placehold.it/100x100",
    "company": "PHUEL",
    "email": "celestepetersen@phuel.com",
    "about": "Consequat adipisicing fugiat pariatur nostrud ex consequat voluptate elit excepteur cillum commodo. Veniam anim irure do occaecat proident non excepteur cillum laboris qui sunt. Ullamco proident id do nisi fugiat consequat culpa Lorem occaecat mollit ex sunt. Laboris amet qui magna occaecat laboris exercitation. Fugiat esse commodo voluptate ea ea Lorem tempor enim esse. Aliquip excepteur voluptate esse cupidatat velit eiusmod ut. Nostrud mollit Lorem excepteur ex laboris veniam minim officia.\r\n",
    "registered": "2017-01-02T10:49:28 +05:00",
    "tags": [
      "excepteur",
      "Lorem",
      "voluptate",
      "est",
      "in",
      "veniam",
      "cupidatat"
    ]
  },
  {
    "_id": "58a1bceca80ed950473471c3",
    "index": 1,
    "guid": "0e7b8b12-ae0a-4143-9eff-a774510181a0",
    "name": "adipisicing aliqua",
    "isActive": false,
    "price": "$1,731.32",
    "picture": "http://placehold.it/100x100",
    "company": "MAXEMIA",
    "email": "celestepetersen@maxemia.com",
    "about": "Dolor sint sunt qui tempor amet commodo eu anim do enim. Officia nulla tempor consequat laboris dolor officia tempor dolore deserunt pariatur nostrud consectetur. Ullamco occaecat cupidatat est proident reprehenderit nostrud ut labore. Id sunt exercitation incididunt elit mollit dolore occaecat proident laborum sit incididunt tempor. Nisi occaecat sunt nisi nostrud in dolor amet nostrud elit occaecat incididunt incididunt ullamco cupidatat. Velit amet labore quis labore sunt voluptate.\r\n",
    "registered": "2015-12-22T05:58:24 +05:00",
    "tags": [
      "sint",
      "ullamco",
      "velit",
      "voluptate",
      "consectetur",
      "officia",
      "excepteur"
    ]
  },
  {
    "_id": "58a1bcecc0b4caa59c3dfd18",
    "index": 2,
    "guid": "d0b419b0-7b96-4cc2-b144-54d6122611a8",
    "name": "ex pariatur",
    "isActive": true,
    "price": "$3,168.15",
    "picture": "http://placehold.it/100x100",
    "company": "COMTOUR",
    "email": "celestepetersen@comtour.com",
    "about": "Culpa ipsum non do velit ullamco in ipsum. Eu ea dolore sunt cillum cupidatat exercitation ea culpa labore non. Reprehenderit incididunt nulla Lorem aliqua eiusmod velit proident minim ex Lorem anim duis ut. Duis aliquip ex irure eiusmod officia mollit proident. Do voluptate adipisicing ad fugiat nulla veniam velit eu do ipsum anim incididunt sunt nulla.\r\n",
    "registered": "2015-08-21T02:52:07 +05:00",
    "tags": [
      "deserunt",
      "consequat",
      "laboris",
      "ex",
      "do",
      "deserunt",
      "aliqua"
    ]
  },
  {
    "_id": "58a1bcec24e7a0c590ac3570",
    "index": 3,
    "guid": "d7d689b2-4957-4931-8c73-d726a397bdef",
    "name": "nostrud aliqua",
    "isActive": false,
    "price": "$2,501.86",
    "picture": "http://placehold.it/100x100",
    "company": "SURELOGIC",
    "email": "celestepetersen@surelogic.com",
    "about": "Non aliqua et exercitation ut laboris est quis deserunt ad elit. Eu exercitation anim voluptate pariatur aute officia proident laborum. Qui velit incididunt sit exercitation culpa aute eiusmod velit excepteur.\r\n",
    "registered": "2014-04-28T07:59:13 +05:00",
    "tags": [
      "ipsum",
      "laborum",
      "do",
      "cillum",
      "esse",
      "minim",
      "ad"
    ]
  },
  {
    "_id": "58a1bcec10b1fdf791d6388c",
    "index": 4,
    "guid": "6c33755d-d697-4b00-83b6-bc776fe94a65",
    "name": "nostrud ex",
    "isActive": false,
    "price": "$2,760.85",
    "picture": "http://placehold.it/100x100",
    "company": "QUONATA",
    "email": "celestepetersen@quonata.com",
    "about": "Eiusmod est aliqua ad velit occaecat id qui occaecat nostrud et. Mollit reprehenderit ex labore pariatur enim sit excepteur minim dolor ullamco nulla pariatur. Adipisicing proident eiusmod pariatur cupidatat id aliquip enim officia consectetur fugiat eu dolore. Enim cillum laboris ad ea quis pariatur dolore nisi. Ut nisi aliqua aliqua sit ex voluptate voluptate consequat ullamco eiusmod sint dolor.\r\n",
    "registered": "2016-08-06T12:47:34 +05:00",
    "tags": [
      "laboris",
      "duis",
      "deserunt",
      "culpa",
      "ea",
      "quis",
      "minim"
    ]
  }
]
}
