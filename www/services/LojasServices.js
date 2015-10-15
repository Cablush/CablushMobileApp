angular.module('cablushApp')
  .service('LojasServices', ['$q', '$http', function LojasServices($q, $http) {

    this.getLojasByLocal = function( local ) {
      return $http.get('/api/v1/gestao/boletim?user_id='+userId);
    };

}]);