VendorImages = new Ground.Collection("vendor-images");

VendorImages.helpers({
    vendor: function() {
        var vendor = Vendors.findOne(this.vendorId);
        if(vendor){
            return vendor.name;
        } else {
            return "(undefined)";
        }
    }
});

Schemas = {};

Schemas.VendorImages = new SimpleSchema({
    vendorId: {
        type: String,
        label: 'Vendor',
        autoform: {
            options: function () {
                return _.map(Vendors.find({}).fetch(), function (vendor) {
                    return {
                        label: vendor.name,
                        value: vendor._id
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

VendorImages.attachSchema(Schemas.VendorImages);