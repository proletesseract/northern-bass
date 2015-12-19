/**
 * Created by craigmacgregor on 26/10/15.
 */

AdminConfig = {
    name: 'Northern Bass',
    adminEmails: ['craig.b.macgregor@gmail.com','work@paulgrey.co.nz'],
    collections: {
        Artists: {
            tableColumns: [
                { label: 'Name', name: 'name' },
                { label: 'Country', name: 'country', }
            ]
        },
        ArtistImages: {
            tableColumns: [
                { label: 'Artist', name: function(doc) {
                        return ArtistImages.findOne({_id: doc._id}).artist();
                    }
                },
                { label: 'Image', name: 'image' },
            ]
        },
        Faqs: {
            tableColumns: [
                { label: 'Title', name: 'title' }
            ]
        },
        TimeSlots: {
            tableColumns: [
                { label: 'Start Date', name: 'startDate' },
                { label: 'Start Time', name: function(doc) {
                        return TimeSlots.findOne({_id: doc._id}).startTime();
                    }
                },
                { label: 'End Time', name: function(doc) {
                        return TimeSlots.findOne({_id: doc._id}).endTime();
                    }
                },
                { label: 'Artist', name: function(doc) {
                        return TimeSlots.findOne({_id: doc._id}).artist();
                    }
                }
            ]
        },
        VendorImages: {
            tableColumns: [
                { label: 'Vendor', name: function(doc) {
                        return VendorImages.findOne({_id: doc._id}).vendor();
                    }
                },
                { label: 'Image', name: 'image' },
            ]
        },
        Vendors: {
            tableColumns: [
                { label: 'Position', name: 'position'},
                { label: 'Name', name: 'name' },
                { label: 'Type', name: function(doc) {
                        return Vendors.findOne({_id: doc._id}).typeLabel();
                    }
                },
                { label: 'Zone', name: function(doc) {
                    return Vendors.findOne({_id: doc._id}).zoneLabel();
                }
                },
            ]
        },
        LostProperty: {
            tableColumns: [
                { label: 'Item', name: 'item' },
                { label: 'Name', name: 'name' },
                { label: 'Email', name: 'email' },
                { label: 'Phone Number', name: 'phoneNumber' }
            ]
        }
    }
};