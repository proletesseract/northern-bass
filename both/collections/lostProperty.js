LostProperty = new Mongo.Collection("lostProperty");

var Schemas = {};

Schemas.LostProperty = new SimpleSchema({
    item: {
        type: String,
        label: "Item",
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
    },
    location: {
        type: String,
        label: 'Location',
        optional: true
    },
    date: {
        type: Date,
        label: "Date",
        optional: true
    },
    time: {
        type: String,
        label: "Time",
        optional: true
    },
    name: {
        type: String,
        label: "Name",
        optional: true
    },
    phoneNumber: {
        type: String,
        label: "Phone Number",
        optional: true
    },
    email: {
        type: String,
        label: "Email",
        optional: true
    },
    userId: {
        type: String,
        label: "UserId",
        optional: true
    }
});

LostProperty.attachSchema(Schemas.LostProperty);