TimeSlots = new Mongo.Collection("time-slots");

TimeSlots.helpers({
    artist: function() {
        console.log(this);
        var artist = Artists.findOne(this.artistId);
        if(artist){
            return artist.name;
        } else {
            return "(undefined)";
        }
    },
    startTime: function() {
        var returnTime;
        if(this.startHour < 10) {
            returnTime = "0"+this.startHour;
        } else {
            returnTime = this.startHour;
        }
        if(this.startMinute == 0) {
            returnTime += ":0" + this.startMinute;
        } else {
            returnTime += ":" + this.startMinute;
        }
        return returnTime;
    },
    endTime: function() {
        var returnTime;
        if(this.endHour < 10) {
            returnTime = "0"+this.endHour;
        } else {
            returnTime = this.endHour;
        }
        if(this.endMinute == 0) {
            returnTime += ":0" + this.endMinute;
        } else {
            returnTime += ":" + this.endMinute;
        }
        return returnTime;
    }
});

var Schemas = {};

var dates = [
    { label: '29 December', value: '2015-12-29' },
    { label: '30 December', value: '2015-12-30' },
    { label: '31 December', value: '2015-12-31' },
    { label: '01 January', value: '2016-01-01' },
];

var hours = [
    { label: '00', value: '0' },
    { label: '01', value: '1' },
    { label: '02', value: '2' },
    { label: '03', value: '3' },
    { label: '04', value: '4' },
    { label: '05', value: '5' },
    { label: '06', value: '6' },
    { label: '07', value: '7' },
    { label: '08', value: '8' },
    { label: '09', value: '9' },
    { label: '10', value: '10' },
    { label: '11', value: '11' },
    { label: '12', value: '12' },
    { label: '13', value: '13' },
    { label: '14', value: '14' },
    { label: '15', value: '15' },
    { label: '16', value: '16' },
    { label: '17', value: '17' },
    { label: '18', value: '18' },
    { label: '19', value: '19' },
    { label: '20', value: '20' },
    { label: '21', value: '21' },
    { label: '22', value: '22' },
    { label: '23', value: '23' },
];

var minutes = [
    { label: '00', value: '0' },
    { label: '15', value: '15' },
    { label: '30', value: '30' },
    { label: '45', value: '45' },
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
    startHour: {
        type: String,
        label: 'Start Hour',
        autoform: {
            options: function() {
                return hours;
            }
        }
    },
    startMinute: {
        type: String,
        label: 'Start Minute',
        autoform: {
            options: function() {
                return minutes;
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
    endHour: {
        type: String,
        label: 'End Hour',
        autoform: {
            options: function() {
                return hours;
            }
        }
    },
    endMinute: {
        type: String,
        label: 'End Minute',
        autoform: {
            options: function() {
                return minutes;
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