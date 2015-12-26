Faqs = new Ground.Collection("faqs");

var Schemas = {};

Schemas.Faqs = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
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
    image: {
        type: String,
        label: "Image",
        max: 200,
        optional: true
    }
});

Faqs.attachSchema(Schemas.Faqs);

// if(Meteor.isCordova) Ground.Collection(faqs);