Meteor.startup(function() {
  // Code used to prepopulate a database if needed.

  if (Faqs.find().count() === 0) {
    Faqs.insert({
      title: "Northern Bass FAQ",
      description: "This is a test FAQ",
      image: "images/faqs/faq1.jpg"
    });
  }

  if (TimeSlots.find().count() === 0) {
    TimeSlots.insert({
      startDate: "2015-12-29",
      startHour: '8',
      startMinute: '15',
      endDate: "2015-12-29",      
      endHour: '9',
      endMinute: '0',
      artistId: "ARTIST_ID",
      stage: 1,
      bgColour: "FFF",
      titleColour: "CCC"
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
      position: 1,
      name: "The Lucky Taco",
      description: "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.",
      zone: 1,
      type: 1,
      xCoord: 10,
      yCoord: 50,
      glutenFree: true,
      vegetarian: true,
      vegan: false,
      bgColour: "5e419b",
      titleColour: "000000"
    });
  }

  if (VendorImages.find().count() === 0) {
    VendorImages.insert({
      image: "images/vendor-images/vendor1.jpg",
      caption: "Pakage DJing at Fu Bar",
      vendorId: "VENDOR_ID"
    });
  }

  if (LostProperty.find().count() === 0) {
    LostProperty.insert({
      item: "Iphone 6",
      description: "Black with a photo of a rabbit on the lock screen",
      image: "image1.jpg",
      location: "Somewhere near stage 1",
      date: "2015-12-30",
      time: "01:15:00",
      phoneNumber: "02102246643",
      name: "Craig MacGregor",
      email: "craig.b.macgregor@gmail.com",
      userId: "1234567890"
    });
  }

  return;

});
