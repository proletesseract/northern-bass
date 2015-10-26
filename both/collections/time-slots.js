TimeSlots = new Mongo.Collection("time-slots");

TimeSlots.helpers({
    artist: function() {
        return Artists.findOne({_id: this.artistId});
    }
});

var Schemas = {};

var dates = [
    { label: '29 December', value: '2015-12-29' },
    { label: '30 December', value: '2015-12-30' },
    { label: '31 December', value: '2015-12-31' },
    { label: '01 January', value: '2016-01-01' },
];

var times = [
    { label: '00:00 am', value: '00:00:00' },
    { label: '01:00 am', value: '01:00:00' },
    { label: '02:00 am', value: '02:00:00' },
    { label: '03:00 am', value: '03:00:00' },
    { label: '04:00 am', value: '04:00:00' },
    { label: '05:00 am', value: '05:00:00' },
    { label: '06:00 am', value: '06:00:00' },
    { label: '07:00 am', value: '07:00:00' },
    { label: '08:00 am', value: '08:00:00' },
    { label: '09:00 am', value: '09:00:00' },
    { label: '10:00 am', value: '10:00:00' },
    { label: '11:00 am', value: '11:00:00' },
    { label: '12:00 pm', value: '12:00:00' },
    { label: '01:00 pm', value: '13:00:00' },
    { label: '02:00 pm', value: '14:00:00' },
    { label: '03:00 pm', value: '15:00:00' },
    { label: '04:00 pm', value: '16:00:00' },
    { label: '05:00 pm', value: '17:00:00' },
    { label: '06:00 pm', value: '18:00:00' },
    { label: '07:00 pm', value: '19:00:00' },
    { label: '08:00 pm', value: '20:00:00' },
    { label: '09:00 pm', value: '21:00:00' },
    { label: '10:00 pm', value: '22:00:00' },
    { label: '11:00 pm', value: '23:00:00' },

];

Schemas.TimeSlot = new SimpleSchema({
    startDate: {
        type: String,
        label: 'Start Date',
        autoform: {
            options: function() {
                return dates;
            }
        }
    },
    startTime: {
        type: String,
        label: 'Start Time',
        autoform: {
            options: function() {
                return times;
            }
        }
    },
    endDate: {
        type: String,
        label: 'End Date',
        autoform: {
            options: function() {
                return dates;
            }
        }
    },
    endTime: {
        type: String,
        label: 'End Time',
        autoform: {
            options: function() {
                return times;
            }
        }
    },
    artistId: {
        type: String,
        label: 'Artist',
        autoform: {
            options: function() {
                return _.map(Artists.find({}).fetch(), function (artist) {
                    return {
                        label: artist.name,
                        value: artist._id
                    };
                });

            }
        }
    },
    stage: {
        type: Number,
        label: 'Stage',
        autoform:  {
            options: function() {
                return [
                    { label: 'Stage 1', value: 1 },
                    { label: 'Stage 2', value: 2 },
                    { label: 'Stage 3', value: 3 }
                ];
            }
        }
    }

});

TimeSlots.attachSchema(Schemas.TimeSlot);