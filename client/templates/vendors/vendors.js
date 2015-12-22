/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



if (Meteor.isClient) {
  // This code only runs on the client

  Template.vendors.helpers({
    type1: function(){
      return getVendorInfo(1);
    },
    type2: function(){
    	return getVendorInfo(2);
    },
    type3: function(){
    	return getVendorInfo(3);
    }
  });

  Meteor.subscribe("vendors");

  Meteor.subscribe("vendor-images");

}

function getVendorInfo(type) {
  var vendors = Vendors.find({type: type}).fetch();
  var formattedVendors = _.map(vendors, vendorsFormatter);
  var sortedVendors = _.sortBy(formattedVendors, vendorSorter);

  return sortedVendors;
}

function vendorsFormatter(vendor){

  var formattedVendor = {
    _id: vendor._id,
    position: vendor.position,
    name: vendor.name,
    description: vendor.description,
    zone: vendor.zone,
    type: vendor.type,
    glutenFree: vendor.glutenFree,
    vegetarian: vendor.vegetarian,
    vegan: vendor.vegan,
    image: VendorImages.findOne({ vendorId: vendor._id })
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