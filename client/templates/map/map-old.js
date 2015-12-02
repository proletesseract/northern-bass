/**
 * Created by chrisgrimshaw-jones on 27/11/15.
 */
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// if (Meteor.isClient) {
//     // This code only runs on the client
//     Template.body.helpers({
//         loc: function () {
//             // return 0, 0 if the location isn't ready
//             return Geolocation.latLng() || { lat: 0, lng: 0 };
//         },
//         error: Geolocation.error
//     });
//
//     Template.routeMap.helpers({
//
//     });
// }
//
// Template.routeMap.onRendered(function(){
//     initMap();
// })


// initMap = function() {
//   var auckland = {lat: -36.848448, lng: 174.7600023};
//   var settlementRd = {lat: -36.1618735, lng: 174.4867605};

//   var map = new google.maps.Map(document.getElementById('map-canvas'), {
//     center: settlementRd,
//     scrollwheel: false,
//     zoomControl: true,
//     zoom: 12,
//     styles: [{
//       stylers: [
//       { lightness: 0 },
//       { saturation: 10 },
//       { hue: "#5E419B" }]
//     }]
//   });

//   var directionsDisplay = new google.maps.DirectionsRenderer({
//     map: map
//   });

//   // Set destination, origin and travel mode.
//   var request = {
//     destination: settlementRd,
//     origin: auckland,
//     travelMode: google.maps.TravelMode.DRIVING
//   };

//   // Pass the directions request to the directions service.
//   var directionsService = new google.maps.DirectionsService();
//   directionsService.route(request, function(response, status) {
//     if (status == google.maps.DirectionsStatus.OK) {
//       // Display the route on the map.
//       directionsDisplay.setDirections(response);
//     }
//   });
// }



// NEW MAP USING GET location
//
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(success);
// } else {
//     alert("There is Some Problem on your current browser to get Geo Location!");
// }
//
// function success(position) {
//     var lat = position.coords.latitude;
//     var long = position.coords.longitude;
//     var city = position.coords.locality;
//     var LatLng = new google.maps.LatLng(lat, long);
//     var mapOptions = {
//         center: LatLng,
//         zoom: 8,
//         styles: [{
//           stylers: [
//           { lightness: 5 },
//           { saturation: 0 },
//           { hue: "#5E419B" }]
//         }],
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//
//     var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
//
//     var settlementRd = {lat: -36.1618735, lng: 174.4867605};
//
//     var _image = new google.maps.MarkerImage('images/map/nb-marker.png',  // size 28 x 42
//         null,
//         new google.maps.Point(0, 0), // The origin for this image is 0,0.
//         new google.maps.Point(12, 35) // The anchor for this image is the base of the flagpole at 60,20.
//     );
//
//     // Set Marker
//     var marker = new google.maps.Marker({
//         position: settlementRd,
//         icon: _image,
//         map: map,
//         title: 'Northern Bass',
//         animation: google.maps.Animation.DROP,
//     });
//
//     marker.addListener('click', toggleBounce);
//
//     function toggleBounce() {
//         marker.setAnimation(google.maps.Animation.BOUNCE);
//     }

    // var directionsDisplay = new google.maps.DirectionsRenderer({
    //     map: map
    // });
    //
    // // Set destination, origin and travel mode.
    // var request = {
    //     destination: settlementRd,
    //     origin: LatLng,
    //     travelMode: google.maps.TravelMode.DRIVING
    // };
    //
    // // Pass the directions request to the directions service.
    // var directionsService = new google.maps.DirectionsService();
    // directionsService.route(request, function(response, status) {
    //     if (status == google.maps.DirectionsStatus.OK) {
    //         // Display the route on the map.
    //         directionsDisplay.setDirections(response);
    //     }
    // });

//}  // end success - got the current position
