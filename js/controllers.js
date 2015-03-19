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
App.controller('SemanaCtrl', function($scope, $rootScope, $location, Aulas) {
  Aulas.get().then(function(data){
      $scope.posts = data.data;
  });
  $rootScope.activetab = $location.path();
});

App.controller('AulaCtrl', function($scope, $filter, $routeParams, Aulas) {
  $scope.profile = {};
  var id = $routeParams.id;
  Aulas.getId(id, function(data){
      $scope.profile = data;    
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