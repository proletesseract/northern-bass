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

	var track_url = 'http://soundcloud.com/northernbass';
	SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
	  console.log('oEmbed response: ', oEmbed);
	  
		var iframe = oEmbed.html;
		$("#soundcloudPlayer").append(iframe);
	});

	SC.stream('/tracks/rhyas-shift-nb-promo-mix-15-16').then(function(sound){
		currentTrack = sound; 
	});

	this.play = function() {
		currentTrack.play();
	};

	this.pause = function() {
		currentTrack.pause();
	};

	this.stop = function() {
		currentTrack.stop();
	};
}

if (Meteor.isServer) {
  // change the following credential to make this demo work
  Soundcloud.setConfig({
    client_id : "40bc6ae123807c628cc971116092a93d",
    client_secret : "a4ed77cc8d20e35c47a8f7d1225719b6",
    // access_token : "ACCESSTOKEN"
  });

  var client = Soundcloud.getClient();

  // some api calls like the following examples belong to here

}


Template.soundcloud.events({
    'click #playMix':function() {
		currentTrack.play();
	},
    'click #pauseMix':function() {
		currentTrack.pause();
	}

});