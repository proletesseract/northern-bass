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
                { label: 'ArtistId', name: 'artistId' },
                { label: 'Artist', name: function() {
                        return ArtistImages.findOne().artist();
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
                        return TimeSlots.findOne({_id: ''}).startTime();
                    }
                },
                { label: 'End Time', name: function() {
                        return TimeSlots.findOne().endTime();
                    }
                },
                { label: 'Artist', name: function() {
                        return TimeSlots.findOne().artist();
                    }
                }
            ]
        },
        VendorImages: {
            tableColumns: [
                { label: 'Vendor', name: function() {
                        return VendorImages.findOne().vendor();
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