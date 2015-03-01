'use strict';

var moment = require('moment');

// ***
// Adds days to the current date.
// And then floors the date to the start of the day at 4:00 AM.
// Returns the value in milliseconds.
// 
// @param days {Number}
// @return {Number}
// ***
function getNextDate(days) {
    return moment().add(days, 'days').startOf('day').add(4, 'hours').valueOf();
}

// ***
// Gets the current day in YYYY-MM-DD format.
// 
// @return {String}
// ***
function getToday() {
    return moment().format('YYYY-MM-DD');
}

// ***
// Given a time in milliseconds, return the day in YYYY-MM-DD format.
// 
// @param milliseconds {Number}
// @return {String}
// ***
function getDayFrom(milliseconds) {
    if (!milliseconds) {
        return undefined;
    }
    return moment(milliseconds).format('YYYY-MM-DD');
}

// Positive if it's past the due date
// 
// @param milliseconds {Number}
// @return {Number}
function daysFromNow(milliseconds) {
    return moment.duration(moment(milliseconds)-moment()).asDays();
}


module.exports = {
    getNextDate: getNextDate,
    getToday: getToday,
    getDayFrom: getDayFrom,
    daysFromNow: daysFromNow
}
