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
}

function getTimeSlotInfo(stage) {
  var timeSlots = TimeSlots.find({stage: stage}).fetch();

  var formattedTimeSlots = _.map(timeSlots, timeSlotsFormatter);

  var sortedTimeSlots = _.sortBy(formattedTimeSlots, timeSlotSorter);

  return sortedTimeSlots;
}

function timeSlotsFormatter (timeSlot) {
  var startDateString = timeSlot.startDate + 'T' + timeSlot.startTime() + ':00+13:00';
  var startDate = new Date(startDateString);

  console.log(startDateString);


  var endDateString = timeSlot.endDate + 'T' + timeSlot.endTime() + ':00+13:00';
  var endDate = new Date(endDateString);

  console.log(endDateString);

  var formattedTimeSlot = {
    _id: timeSlot._id,
    artist: Artists.findOne({_id: timeSlot.artistId}),
    image: ArtistImages.findOne({ artistId: timeSlot.artistId }),
    start: formatDate(startDate),
    startDate: startDate,
    end: formatDate(endDate),
    endDate: endDate
  };

  return formattedTimeSlot;

}

function timeSlotSorter (timeSlot) {
  return timeSlot.startDate;
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
