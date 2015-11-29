if (Meteor.isClient) {
  // This code only runs on the client
  
  Template.soundcloud.helpers({

  });
}

Template.soundcloud.onRendered(function(){
	initSoundCloud();
})

initSoundCloud = function() {
	SC.initialize({
	  client_id: '40bc6ae123807c628cc971116092a93d'
	});

	var track_url = 'https://soundcloud.com/skeptical/skeptical-blue-eyes-vip';
	SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
	  console.log('oEmbed response: ', oEmbed);
	  
		var iframe = oEmbed.html;
		$("#soundcloudPlayer").append(iframe);
	});
}