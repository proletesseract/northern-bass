News = new Ground.Collection("news");

var Schemas = {};

Schemas.News = new SimpleSchema({
    position: {
        type: String,
        label: "Position",
        optional: true
    },
    title: {
        type: String,
        label: "Title",
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
    image: {
        type: String,
        label: 'Image',
        optional: true
    }
});

News.attachSchema(Schemas.News);