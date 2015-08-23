/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Faqs = new Mongo.Collection("faqs");

if (Meteor.isClient) {
  // This code only runs on the client
  
  var addFaq = function(title, description, image){
      Faqs.insert({
        title: title,
        description: description,
        image: image,
        createdAt: new Date() // current time
      });
  };
  
  addFaq("inserted title", "inserted description", "images/inserted.jpg");
  
  Template.main.helpers({
    faqs: function () {
      return Faqs.find();
    }
  });
}
