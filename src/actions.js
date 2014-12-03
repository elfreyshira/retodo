'use strict';

var Reflux = require('reflux');

// ***
// @param dataObj {Object}
// @param dataObj.text {String}
// @param dataObj.days {Number}
var createTask = Reflux.createAction();

// ***
// @param id {String}
var deleteTask = Reflux.createAction();

// ***
// @param id {String}
// @param note {String}
var completeTask = Reflux.createAction();

// ***
// @param id {String}
// @param note {String}
var doTask = Reflux.createAction();


// ***
// @param id {String}
// @param dataObj {Object}
var editTask = Reflux.createAction();


module.exports = {
    createTask: createTask,
    deleteTask: deleteTask,
    completeTask: completeTask,
    doTask: doTask,
    editTask: editTask
};
