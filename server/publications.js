// Meteor.publish() http://docs.meteor.com/#/full/meteor_publish

if (Meteor.isServer){
    Meteor.publish("artist-images", function(){
        return ArtistImages.find({});
    });

    Meteor.publish("artists", function(){
        return Artists.find({});
    });

    Meteor.publish("faqs", function(){
        return Faqs.find({});
    });

    Meteor.publish("time-slots", function(){
        return TimeSlots.find({});
    });

    Meteor.publish("vendors", function(){
        return Vendors.find({});
    });

    Meteor.publish("vendor-images", function(){
        return VendorImages.find({});
    });    
}