Template.map.events({

  'click [data-action="showAlert"]': function(event, template) {
    IonPopup.alert({
      title: 'An Alert',
      template: 'Map',
      okText: 'Got It.'
    });
  },

});
