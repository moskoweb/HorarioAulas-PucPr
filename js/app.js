var App = angular.module('App', [
  'ngRoute','ionic'
]);

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
  .when('/aula/:id', {
    templateUrl: 'templates/aula.html',
    controller: 'AulaCtrl'
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

  // $locationProvider.html5Mode(true);
})
