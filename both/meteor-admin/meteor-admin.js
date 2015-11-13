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
                { label: 'Artist', name: function() {
                        return ArtistImages.findOne().artist().name;
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
                { label: 'Start Time', name: 'startTime' },
                { label: 'End Date', name: 'endDate' },
                { label: 'End Time', name: 'endTime' },
                { label: 'Artist', name: function() {
                        return TimeSlots.findOne().artist().name;
                    }
                }
            ]
        },
        VendorImages: {
            tableColumns: [
                { label: 'Vendor', name: function() {
                    return VendorImages.findOne().vendor().name;
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
        }
    }
};