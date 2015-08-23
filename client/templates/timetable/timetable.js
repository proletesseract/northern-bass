Template.timetable.events({

  'click [data-action="showAlert"]': function(event, template) {
    IonPopup.alert({
      title: 'An Alert',
      template: 'Time Table',
      okText: 'Got It.'
    });
  },

});
