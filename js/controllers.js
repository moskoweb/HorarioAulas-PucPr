var App = angular.module('App', ['ngRoute','ionic']);

App.config(function ($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })
  .when('/semana/', {
    templateUrl: 'templates/semana.html',
    controller: 'SemanaCtrl'
  })
  .when('/aula/:id', {
    templateUrl: 'templates/aula.html',
    controller: 'AulaCtrl'
  })
  .when('/sobre/', {
    templateUrl: 'templates/sobre.html',
    controller: 'SobreCtrl'
  })
  .otherwise({ redirectTo: '/' })

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