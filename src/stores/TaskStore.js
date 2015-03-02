'use strict'

var Reflux = require('reflux');
var firebaseManager = require('../util/firebaseManager');
var UserStore = require('./UserStore');
var TaskActions = require('../actions/TaskActions');
var moment = require('moment');
var _ = require('lodash');
var dates = require('../util/dates');


module.exports = Reflux.createStore({
    listenables: TaskActions,
    init: function() {
        this.userData = {};

        var self = this;
        UserStore.listen(function(userData) {
            self.userData = userData;
            self.getTaskList();
        });
    },
    getTaskList: function() {
        var self = this;
        if (this.userData.isLoggedIn) {
            var userUID = this.userData.auth.uid;
            firebaseManager.getUserRef(userUID).on('value', function(snapshot) {
                self.trigger(snapshot.val());
            })

        }
    },
    createTask: function(taskObj) {
        var creationDate = moment().valueOf();
        var nextDate = dates.getNextDate(taskObj.days);

        var taskObjWithDate = _.merge(
            {},
            taskObj,
            {
                nextDate: nextDate,
                creationDate: creationDate
            }
        );

        var self = this;
        if (this.userData.isLoggedIn) {
            var userUID = this.userData.auth.uid;
            firebaseManager.getUserRef(userUID).push(taskObjWithDate);
        }
    },
    doTask: function(taskId, taskObj) {
        var nextDate = dates.getNextDate(taskObj.days);
        var previousDate = dates.getNow();

        if (this.userData.isLoggedIn) {
            var userUID = this.userData.auth.uid;
            var taskRef = firebaseManager.getUserRef(userUID).child(taskId);

            taskRef.child('nextDate').set(nextDate);
            taskRef.child('previousDate').set(previousDate);
        }
    },
    deleteTask: function(taskId) {
        if (this.userData.isLoggedIn) {
            var userUID = this.userData.auth.uid;
            firebaseManager.getUserRef(userUID).child(taskId).remove();
        }
    }
})
