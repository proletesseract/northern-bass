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


    // Offline Collections

    // Meteor.publish("offlineArtist-images", function(){
    //     return OfflineArtistImages.find({});
    // });

    // Meteor.publish("offlineArtists", function(){
    //     return OfflineArtists.find({});
    // });

    // Meteor.publish("offlineFaqs", function(){
    //     return OfflineFaqs.find({});
    // });

    // Meteor.publish("offlineTime-slots", function(){
    //     return OfflineTimeSlots.find({});
    // });

    // Meteor.publish("offlineVendors", function(){
    //     return OfflineVendors.find({});
    // });

    // Meteor.publish("offlineVendor-images", function(){
    //     return OfflineVendorImages.find({});
    // });
}