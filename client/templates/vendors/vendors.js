/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



if (Meteor.isClient) {
  // This code only runs on the client

  Template.vendors.helpers({
    type1: function(){
        return getVendorType(1);
    },
    type2: function(){
    	return getVendorType(2);
    },
    type3: function(){
    	return getVendorType(3);
    }
  });
}

function getVendorType(type) {
  var vendors = Vendors.find({type: type}, {sort: {position: 1}}).fetch();

  // var formattedTimeSlots = _.map(timeSlots, timeSlotsFormatter);

  // var sortedTimeSlots = _.sortBy(formattedTimeSlots, timeSlotSorter);

  return vendors;
}

function vendorSorter (timeSlot) {
  return timeSlot.startDate;
}