'use strict';

var React = require('react');
var _ = require('lodash');
var ListItem = require('../list-item');
var TaskStore = require('../../stores').TaskStore;

var RetodoList = React.createClass({

    componentDidMount: function() {
        TaskStore.listen(this.onListChange);
        this.setState(TaskStore.getList());
    },
    onListChange: function(taskList) {
        this.replaceState(taskList);
    },
    render: function() {
        var list = _.map(this.state, function(obj, taskId){
            return <ListItem lol={obj} taskId={taskId}></ListItem>;
        });
        return (
            <ul>
                {list}
            </ul>
        );
    }


});

module.exports = RetodoList;
