Vendors = new Mongo.Collection("vendors");

var zones = [
    { label: 'Zone 1', value: 1 },
    { label: 'Zone 2', value: 2 },
    { label: 'Zone 3', value: 3 }
];

var vendorTypes = [
    { label: 'Food & Beverage', value: 1 },
    { label: 'Bar', value: 2 },
    { label: 'Merchandise', value: 3 }
];

// var defaultTitleColour = "000000";

Vendors.helpers({
    zoneLabel: function() {

        for(var i=0; i < zones.length; i++){
            if(zones[i].value === this.zone){
                return zones[i].label;
            }
        }

        return "undefined";
    },
    typeLabel: function() {

        for(var i=0; i < vendorTypes.length; i++){
            if(vendorTypes[i].value === this.type){
                return vendorTypes[i].label;
            }
        }

        return "undefined";
    }
});

var Schemas = {};



Schemas.Vendors = new SimpleSchema({
    position: {
        type: String,
        label: "Position",
        max: 2,
        optional: false
    },
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
    zone: {
        type: Number,
        label: 'Zone',
        autoform:  {
            options: function() {
                return zones;
            }
        }
    },
    type: {
        type: Number,
        label: 'Vendor Type',
        autoform:  {
            options: function() {
                return vendorTypes;
            }
        }
    },
    xCoord: {
        type: Number,
        label: "X Coordinate",
        optional: true
    },
    yCoord: {
        type: Number,
        label: "Y Coordinate",
        optional: true
    },
    glutenFree: {
        type: Boolean,
        label: "-- Gluten Free",
        optional: true
    },
    vegetarian: {
        type: Boolean,
        label: "-- Vegetarian",
        optional: true
    },
    vegan: {
        type: Boolean,
        label: "-- Vegan",
        optional: true
    },
    bgColour: {
        type: String,
        label: "Background Colour",
        max: 6,
        optional: true
    },
    titleColour: {
        type: String,
        label: "Text Colour",
        max: 6,
        optional: true
    }
});

Vendors.attachSchema(Schemas.Vendors);