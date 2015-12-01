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
                { label: 'Start Time', name: function() {
                        return TimeSlots.findOne().startTime();
                    }
                },
                { label: 'End Time', name: function() {
                        return TimeSlots.findOne().endTime();
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
                { label: 'Name', name: 'name' },
                { label: 'Type', name: function() {
                        return Vendors.findOne().typeLabel();
                    }
                },
                { label: 'Zone', name: function() {
                    return Vendors.findOne().zoneLabel();
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