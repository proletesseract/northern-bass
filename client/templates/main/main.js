/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Faqs = new Mongo.Collection("faqs");

if (Meteor.isClient) {
  // This code only runs on the client
  
  console.log(Faqs);
  
  console.log(Faqs.find());
  
  Template.main.helpers({
    faqs: function () {
      return Faqs.find();
    }
  });
}