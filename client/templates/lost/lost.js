Template.lost.events({

  'click [data-action="showAlert"]': function(event, template) {
    IonPopup.alert({
      title: 'An Alert',
      template: 'Lost?',
      okText: 'Got It.'
    });
  },

});
