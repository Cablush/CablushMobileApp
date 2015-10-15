angular.module('cablushApp')
.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
  function initialize() {
    var myLatlng = new google.maps.LatLng(-19.890723, -44.033203);

    var mapOptions = {
      center: myLatlng,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
      mapOptions);
    
    var compiled = $compile(markerPopup(local))($scope);

    var infowindow = new google.maps.InfoWindow({
      content: compiled[0]
    });

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Uluru (Ayers Rock)'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });

    $scope.map = map;
  }
  google.maps.event.addDomListener(window, 'load', initialize);

  $scope.centerOnMe = function() {
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function(pos) {
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function(error) {
      alert('Unable to get location: ' + error.message);
    });
  };

  $scope.clickTest = function() {
    alert('Example of infowindow with ng-click')
  };

 function markerPopup( local ){
          /*
          var content = '<div class="infoWindowContent">';
          content += ''+local.nome+'<br/>';
          content += ''+local.logradouro+'<br/>'
          content += ''+local.descricao+'<br/>';
          content += ''+local.esportes;
          content += '</div>'
          */

          var content = '<div class="infoWindowContent">';
          content += ' TESTE <br/>';
          content += ' Rua teste <br/>'
          content += 'Teste de local de teste muito legal o teste <br/>';
          content += '[Teste, teste, outro Teste]';
          content += '</div>'
          return content;
 }
 
});