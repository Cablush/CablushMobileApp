angular.module('cablushApp')
  .service('PistasServices', ['$q', '$http', function LojasServices($q, $http) {

    this.getPistasByLocal = function( local ) {
      return $http.get('/api/v1/gestao/boletim?user_id='+userId);
    };

}]);