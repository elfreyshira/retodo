#!/usr/bin/env node

var moment = require('moment');
var loremIpsum = require('lorem-ipsum');

function createRandomTask() {
    var year = 2014;
    var month = Math.max(1, Math.ceil(Math.random() * 12));
    var day = Math.max(1, Math.ceil(Math.random() * 28));

    var dateString = [year, month, day].join('-');
    var dateMoment = moment(dateString);

    var frequency = Math.max(1, Math.ceil(Math.random() * 30));

    var howOften = Math.round(Math.random() * 4);

    var deedsArr = [];
    var latest = dateMoment;
    while (howOften-- > 0) {
        latest = latest.add(frequency + Math.round(Math.random()*3), 'days');
        deedsArr.push(latest.valueOf());
    }
    latest = latest.add(frequency + Math.round(Math.random()*3), 'days');

    return  {
        creationDate: dateMoment.valueOf(),
        nextDate: latest.valueOf(),
        days: frequency,
        title: loremIpsum(),
        description: loremIpsum({units:'paragraphs', count: 2}),
        deeds: deedsArr
    };
}


// var fixtureData = {
//     'google:112133420634807881172': [,
//         createRandomTask(),
//         createRandomTask(),
//         createRandomTask()
//     ]
// };

var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://retodo.firebaseio.com/google:112133420634807881172");
myFirebaseRef.push(createRandomTask());
myFirebaseRef.push(createRandomTask());
myFirebaseRef.push(createRandomTask());

// module.exports = fixtureData;

