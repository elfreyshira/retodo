'use strict';

var moment = require('moment');

// ***
// Adds days to the current date.
// And then floors the date to the start of the day.
// Returs the value in milliseconds.
// 
// @param days {Number}
// @return {Number}
// ***
function getNextDate(days) {
    return moment().add(days, 'days').startOf('day').valueOf();
}

// ***
// Gets the current day in YYYY-MM-DD format.
// 
// @return {String}
// ***
function getToday() {
    return moment().format('YYYY-MM-DD');
}

module.exports = {
    getNextDate: getNextDate,
    getToday: getToday
}
