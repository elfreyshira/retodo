'use strict';

var React = require('react');
var TaskList = require('./components/task-list');
var Login = require('./components/login');
var CreateTask = require('./components/create-task');

React.render(
    <div>
        <Login></Login>
        <TaskList></TaskList>
        <CreateTask></CreateTask>
    </div>
    ,
    document.getElementById('example')
);
