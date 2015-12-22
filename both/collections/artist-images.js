ArtistImages = new Mongo.Collection("artist-images");

ArtistImages.helpers({
    artist: function() {
        var artist = Artists.findOne(this.artistId);
        if(artist){
            return artist.name;
        } else {
            return "(undefined)";
        }
    }
});

Schemas = {};

Schemas.ArtistImages = new SimpleSchema({
    artistId: {
        type: String,
        label: 'Artist',
        autoform: {
            options: function () {
                return _.map(Artists.find({}).fetch(), function (artist) {
                    return {
                        label: artist.name,
                        value: artist._id
                    };
                });
            }
        }
    },
    image: {
        type: String,
        label: 'Image',
        max: 200,
        optional: true
    },
    caption: {
        type: String,
        label: 'Caption',
        max: 120,
        optional: true
    }
});

ArtistImages.attachSchema(Schemas.ArtistImages);