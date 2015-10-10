angular.module('cablushApp', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/search.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.search = modal;
  });

  // Triggered in modals to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.closeSearch = function() {
    $scope.search.hide();
  };

  // Open pop up modals
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.buscar = function() {
    $scope.search.show();
  };

  // Perform the action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.doBuscar = function() {
    console.log('Doing Buscar', $scope.buscarData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };


})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
