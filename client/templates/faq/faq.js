Template.faq.events({

  'click [data-action="showAlert"]': function(event, template) {
    IonPopup.alert({
      title: 'An Alert',
      template: 'Questions',
      okText: 'Got It.'
    });
  },

});
