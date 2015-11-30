if (Meteor.isClient) {
  // This code only runs on the client

  Template.timetable.helpers({
    stage1: function(){
      return getTimeSlotInfo(1);
    },
    stage2: function(){
      return getTimeSlotInfo(2);
    },
    stage3: function(){
      return getTimeSlotInfo(3);
    }
  });

  Template.timeslot.events = {
    'click .button' : function(e){
      var win = window.open(this.link, '_blank');
      win.focus();
    }
  };
}

function getTimeSlotInfo(stage) {
  var timeSlots = TimeSlots.find({stage: stage}).fetch();
  return _.map(timeSlots, function(timeSlot) {
    return {
      _id: timeSlot._id,
      artist: Artists.findOne({_id: timeSlot.artistId}),
      image: ArtistImages.findOne({ artistId: timeSlot.artistId }),
      start: formatDate(new Date(timeSlot.startDate + ' ' + timeSlot.startTime())),
      end: formatDate(new Date(timeSlot.endDate + ' ' + timeSlot.endTime()))
    };
  });
}

function formatDate(date) {

  var months = [
    {full: 'January', abbr: 'Jan'},
    {full: 'February', abbr: 'Feb'},
    {full: 'March', abbr: 'Mar'},
    {full: 'April', abbr: 'Apr'},
    {full: 'May', abbr: 'May'},
    {full: 'June', abbr: 'Jun'},
    {full: 'July', abbr: 'Jul'},
    {full: 'August', abbr: 'Aug'},
    {full: 'September', abbr: 'Sep'},
    {full: 'October', abbr: 'Oct'},
    {full: 'November', abbr: 'Nov'},
    {full: 'December', abbr: 'Dec'}
  ];

  return {
    minutes: (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
    hours: (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
    day: date.getDate(),
    month: months[date.getMonth()],
    year: date.getFullYear()
  }

}

Template.timeslot.events({
    'click #artistFavourite':function(event,template) {
        var state = MyCollection.findOne({}).state
        MyCollection.update({}, {$set:{state:!state}});
    }
});

Template.timeslot.helpers({
    item:function() {
        return MyCollection.findOne({});
    }
});
