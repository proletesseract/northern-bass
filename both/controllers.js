AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

MainController = AppController.extend({
  // EXAMPLE:
  // waitOn: function () {
  //   return Meteor.subscribe('products');
  // },
  // data: function () {
  //   return {
  //     products: Products.find({}, {sort: {numberOfVotes: -1, name: -1}})
  //   };
  // }
});

TimetableController = AppController.extend({});

MapController = AppController.extend({});

FaqsController = AppController.extend({});

NewsController = AppController.extend({});

LostController = AppController.extend({});

VendorsController = AppController.extend({});

SoundcloudController = AppController.extend({});

