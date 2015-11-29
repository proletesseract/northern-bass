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

	var track_url = 'http://soundcloud.com/paul-g-nz/sets/northern-bass-15-16';
	SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
	  console.log('oEmbed response: ', oEmbed);
	  
		var iframe = oEmbed.html;
		$("#soundcloudPlayer").append(iframe);
	});
}