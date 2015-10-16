angular.module('cablushApp')
.controller('MapCtrl', function($scope, $ionicLoading, $compile, $cordovaGeolocation) {

function initialize() {
    var myLatlng = new google.maps.LatLng(-19.890723, -44.033203);

    var mapOptions = {
      center: myLatlng,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
      mapOptions);
    
    var compiled = $compile(markerPopup(""))($scope);

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

  function createMaker(local){
    var nomeTipo;
      var image = {
      url: 'https://s3.amazonaws.com/denguereport/ic_substituicao.png',
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 32)
    };
   
    
      var marker = new google.maps.Marker({
          map: $scope.map,
          icon: image,
          position: new google.maps.LatLng(info.latitude, info.longitude)
      });
      marker.content = markerPopup(local) ;
      
      google.maps.event.addListener(marker, 'click', function(){
          infoWindow.setContent(marker.content);
          infoWindow.open($scope.map, marker);
      });
      
      $scope.markers.push(marker);
  }

 function markerPopup( local ){
          
          var content = '<div class="infoWindowContent">';
          content += ''+local.nome+'<br/>';
          content += ''+local.logradouro+'<br/>'
          content += ''+local.descricao+'<br/>';
          content += ''+local.esportes;
          content += '</div>'

          return content;
 }
});