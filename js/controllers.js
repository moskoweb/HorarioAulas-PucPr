var App = angular.module('App', ['ngRoute','ionic']);

App.config(function ($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })
  .when('/semana/', {
    templateUrl: 'templates/semana.html',
    controller: 'SemanaCtrl'
  })
  .when('/aula1', {
    templateUrl: 'templates/aula1.html',
    controller: 'AulaCtrl'
  })
  .when('/aula2', {
    templateUrl: 'templates/aula2.html',
    controller: 'AulaCtrl'
  })
  .when('/aula3', {
    templateUrl: 'templates/aula3.html',
    controller: 'AulaCtrl'
  })
  .when('/aula4', {
    templateUrl: 'templates/aula4.html',
    controller: 'AulaCtrl'
  })
  .when('/aula5', {
    templateUrl: 'templates/aula5.html',
    controller: 'AulaCtrl'
  })
  .when('/sobre/', {
    templateUrl: 'templates/sobre.html',
    controller: 'SobreCtrl'
  })
  .otherwise({ redirectTo: '/' });

  $locationProvider.html5Mode(true);
})

// Controller de Rota
App.controller('HomeCtrl', function($rootScope, $location) {
   $rootScope.activetab = $location.path();
});
App.controller('AulaCtrl', function($rootScope, $location) {
   $rootScope.activetab = $location.path();
});
App.controller('SobreCtrl', function($rootScope, $location) {
   $rootScope.activetab = $location.path();
});
App.controller('SemanaCtrl', function($rootScope, $location) {
   $rootScope.activetab = $location.path();
});
// Fim Rotas

App.controller('AulaCtrl', function($scope, $filter, $routeParams, AulaCtrl) {
  var myfilter = $filter;

  $scope.posts =myfilter('filter')(data,{
    id: $routeParams.id
  })[0];
});

// Faz Leitura do JSON
App.controller("AulaCtrl", function($scope, $http) {
  $http.get('../db/db.json').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});
// Fim Leitura do JSON

// Diretivas
// App.directive('dragBack', function($ionicGesture, $state) {
//   return {
//     restrict : 'A',
//     link : function(scope, elem, attr) {

//       $ionicGesture.on('swiperight', function(event) {

//         console.log('Got swiped!');
//         event.preventDefault();
//         window.history.back();

//       }, elem);

//     }
//   }
// })