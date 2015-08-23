Template.vendors.events({

  'click [data-action="showAlert"]': function(event, template) {
    IonPopup.alert({
      title: 'An Alert',
      template: 'Vendors',
      okText: 'Got It.'
    });
  },

});
