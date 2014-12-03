'use strict';

var React = require('react');
var RetodoList = require('./components/retodo-list/retodo-list.jsx');
var CreateTask = require('./components/create-task/create-task.jsx');

React.render(
    <div>
        <CreateTask></CreateTask>
        <RetodoList></RetodoList>
    </div>
    ,
    document.getElementById('example')
);

console.log('hello world');

