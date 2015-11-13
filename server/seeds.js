Meteor.startup(function() {
  // Code used to prepopulate a database if needed.

  if (Faqs.find().count() === 0) {
    Faqs.insert({
      title: "Completely synergize resource",
      description: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.",
      image: "images/faqs/faq1.jpg"
    });
  }

  if (TimeSlots.find().count() === 0) {
    TimeSlots.insert({
      startDate: "2015-12-29",
      endDate: "2015-12-29",
      startTime: "08:00",
      endTime: "010:00",
      artistId: "ARTIST_ID",
      stage: 1
    });
  }

  if (Artists.find().count() === 0) {
    Artists.insert({
      name: "Pakage",
      description: "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.",
      soundcloud: "http://www.soundcloud.com/pakage",
      country: "New Zealand"
    });
  }

  if (ArtistImages.find().count() === 0) {
    ArtistImages.insert({
      image: "images/artist-images/artist1.jpg",
      caption: "Pakage DJing at Fu Bar",
      artistId: "ARTIST_ID"
    });
  }

  if (Vendors.find().count() === 0) {
    Vendors.insert({
      name: "The Lucky Taco",
      description: "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.",
      zone: 1,
      type: 1,
      xCoord: 10,
      yCoord: 50,
      glutenFree: true,
      vegetarian: true,
      vegan: false
    });
  }

  if (VendorImages.find().count() === 0) {
    VendorImages.insert({
      image: "images/vendor-images/vendor1.jpg",
      caption: "Pakage DJing at Fu Bar",
      vendorId: "VENDOR_ID"
    });
  }

  return;

});
