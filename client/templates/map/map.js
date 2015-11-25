/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



if (Meteor.isClient) {
  // This code only runs on the client

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

initMap = function(){

    var map = $("#map-canvas");
      var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(-36.1620727, 174.4867605),
        styles: [{
          stylers: [
            { lightness: 0 },
            { saturation: 10 },
            { hue: "#5E419B"}
          ]
        }]
      };
      map = new google.maps.Map(document.getElementById('map-canvas'),
  mapOptions);

}