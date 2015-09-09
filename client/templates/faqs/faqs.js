/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



if (Meteor.isClient) {
  // This code only runs on the client
  
  Template.faqs.helpers({
    tasks: function(){
        return Faqs.find({});
    }
  });
}
