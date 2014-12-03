'use strict';

var Reflux = require('reflux');
var Actions = require('./actions');
var _ = require('lodash');
var moment = require('moment');
var dateUtil = require('./util/dates');

// var lol = moment.utc().format('YYYY-MM-DD')
// moment.utc(lol).valueOf() --> 1417392000000

// moment().startOf('day');

// creationDate = moment().format('YYYY-MM-DD');
// rightNow = moment().valueOf();
// nextDate = rightNow + moment.duration(days, 'days').valueOf();

var fixtures = {
    randomid1: {
        creationDate: '2014-10-24',
        nextDate: 1419829200000, //'2014-12-29'
        days: 30,
        text: 'Call family.',
        deeds: [
            {
                date: '2014-10-27',
                text: 'Looking to buy new house'
            },
            {
                date: '2014-11-29',
                text: 'Found a good house, going to set offer'
            }
        ]
    },
    randomid2: {
        creationDate: '2014-5-01',
        nextDate: 1422507600000, //'2015-01-29'
        days: 30,
        text: 'Change water filter.',
        deeds: [
            {
                date: '2014-10-27',
                text: 'Looking to buy new house'
            },
            {
                date: '2014-11-29',
                text: 'Found a good house, going to set offer'
            }
        ]
    },
    randomid3: {
        creationDate: '2014-5-01',
        nextDate: 1422507600000, //'2015-01-29'
        days: 30,
        text: 'Call Smith.',
        deeds: [
            {
                date: '2014-10-27',
                text: 'Looking to buy new house'
            },
            {
                date: '2014-11-29',
                text: 'Found a good house, going to set offer'
            }
        ]
    }
};

// Creates a DataStore
var TaskStore = Reflux.createStore({

    // Initial setup
    init: function() {

        // Register statusUpdate action
        this.listenTo(Actions.createTask, this.createTask);
        this.listenTo(Actions.deleteTask, this.deleteTask);
        this.listenTo(Actions.completeTask, this.completeTask);
        this.listenTo(Actions.doTask, this.doTask);
        this.listenTo(Actions.editTask, this.editTask);

        this.updateList();

        console.log('triggering');
    },
    getList: function() {
        return fixtures;
    },
    updateList: function() {
        var _this = this;
        setTimeout(function() {
            _this.trigger(fixtures);
        }, Math.floor(Math.random()*2000));
    },

    createTask: function(dataObj) {

        var creationDate = dateUtil.getToday();
        var nextDate = dateUtil.getNextDate(dataObj.days);

        var newTask = _.merge({}, dataObj, {
            creationDate: creationDate,
            nextDate: nextDate,
            deeds: []
        });
        fixtures[Math.random()] = newTask; // push firebase object

        this.updateList();

    },

    deleteTask: function(id) {
        console.log('deleting ' + id);
        delete fixtures[id];
        this.updateList();
    },

    doTask: function(id, text) {
        console.log('doing task ' + id + ' :' + text);

        var task = fixtures[id];
        task.deeds.push({
            date: dateUtil.getToday(),
            text: text
        });
        task.nextDate = dateUtil.getNextDate(task.days);

        this.updateList();
    }

});

module.exports = {
    TaskStore: TaskStore
};
