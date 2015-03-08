'use strict';

var React = require('react');
var TaskList = require('./components/task-list');
var Login = require('./components/login');
var CreateTask = require('./components/create-task');
var Body = require('./components/body');

React.render(
    <Body>
        <Login></Login>
        <TaskList></TaskList>
        <CreateTask></CreateTask>
    </Body>
    ,
    document.body
);
