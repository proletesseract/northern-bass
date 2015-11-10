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
        Faqs: {},
        TimeSlots: {
            tableColumns: [
                { label: 'Start Date', name: 'startDate' },
                { label: 'Start Time', name: 'startTime' },
                { label: 'End Date', name: 'endDate' },
                { label: 'End Time', name: 'endTime' },
                { label: 'Artist', name: function() {
                    console.log(this);
                        return TimeSlots.findOne().artist().name;
                    }
                }
            ]
        },
        VendorImages: {},
        Vendors: {}
    }
};