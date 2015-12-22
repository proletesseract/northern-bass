Artists = new Mongo.Collection("artists");

var Schemas = {};

Schemas.Artist = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 200,
        optional: true
    },
    description: {
        type: String,
        label: "Description",
        autoform: {
            rows: 5
        },
        optional: true
    },
    soundcloud: {
        type: String,
        label: "SoundCloud",
        max: 200,
        optional: true
    },
    country: {
        type: String,
        label: "Country",
        max: 200,
        optional: true
    }
});

Artists.attachSchema(Schemas.Artist);