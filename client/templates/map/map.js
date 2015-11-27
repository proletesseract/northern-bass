/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    loc: function () {
      // return 0, 0 if the location isn't ready
      return Geolocation.latLng() || { lat: 0, lng: 0 };
    },
    error: Geolocation.error
  });
  
  Template.routeMap.helpers({

  });
}

Template.routeMap.onRendered(function(){
	initMap();
})


/*initMap = function(){
    var map;
      var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(-34.397, 150.644)
      };
      map = new google.maps.Map(document.getElementById('map-canvas'),
  mapOptions);
}
*/
/*
initMap = function(){


    var auckland = {lat: 50, lng: 50};

    var map = $("#map-canvas");
      var mapOptions = {
        zoom: 22,
        center: new google.maps.LatLng(-36.1620727, 174.4867605),
        styles: [{
          stylers: [
            { lightness: 0 },
            { saturation: 10 },
            { hue: "#5E419B"}
          ]
        }]
      };
      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

}*/

initMap = function() {
  var auckland = {lat: -36.848448, lng: 174.7600023};
  var settlementRd = {lat: -36.1618735, lng: 174.4867605};

  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: settlementRd,
    scrollwheel: false,
    zoomControl: true,    
    zoom: 12,
    styles: [{
      stylers: [
      { lightness: 0 },
      { saturation: 10 },
      { hue: "#5E419B" }]
    }]
  });

  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
  });

  // Set destination, origin and travel mode.
  var request = {
    destination: settlementRd,
    origin: auckland,
    travelMode: google.maps.TravelMode.DRIVING
  };

  // Pass the directions request to the directions service.
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      // Display the route on the map.
      directionsDisplay.setDirections(response);
    }
  });
}