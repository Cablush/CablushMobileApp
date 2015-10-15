angular.module('cablushApp')
  .service('EventosServices', ['$q', '$http', function EventosServices($q, $http) {

    this.getEventosByLocal = function( local ) {
      return $http.get('/api/v1/gestao/boletim?user_id='+userId);
    };

}]);