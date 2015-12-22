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

  Meteor.subscribe("vendors");

  Meteor.subscribe("vendor-images");

}

function getVendorType(type) {
  // var vendors = Vendors.find({type: type}, {sort: {position: 1}}).fetch();
  var vendors = Vendors.find({type: type}).fetch();

  // var formattedVendors = _.map(vendors, vendorsFormatter);

  var sortedVendors = _.sortBy(vendors, vendorSorter);

  // var sortedTimeSlots = _.sortBy(formattedTimeSlots, timeSlotSorter);

  return sortedVendors;
}

function vendorsFormatter(vendor){

  var formattedVendor = {
    _id: vendor._id,
    vendor: Vendors.findOne({_id: vendor.vendorId}),
    image: VendorImages.findOne({ vendorId: vendor.vendorId })
  };
  console.log(formattedVendor);

  return formattedVendor;
}

function vendorSorter (vendor) {
  return vendor.position;
}

Template.vendors.helpers({
  'vendors': function(){
    return Vendors.find({});
  }
});