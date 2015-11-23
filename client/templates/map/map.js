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

initMap = function(){
    var map;
      var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(-34.397, 150.644)
      };
      map = new google.maps.Map(document.getElementById('map-canvas'),
  mapOptions);
}