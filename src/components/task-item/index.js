'use strict';
/** @jsx React.DOM */
var React = require('react');
var dates = require('../../util/dates');
var TaskActions = require('../../actions/TaskActions');

var TaskItem = React.createClass({
    displayName: 'TaskItem',
    propTypes: {
        taskId: React.PropTypes.string.isRequired,
        taskObj: React.PropTypes.object.isRequired
    },
    doTask: function(evt) {
        evt.target.blur();
        TaskActions.doTask(this.props.taskId, this.props.taskObj);
    },
    deleteTask: function(evt) {
        evt.target.blur();
        TaskActions.deleteTask(this.props.taskId);
    },
    render: function () {

        var dueDate = dates.getDayFrom(this.props.taskObj.nextDate);
        var previousDate = dates.getDayFrom(this.props.taskObj.previousDate) || 'N/A';

        return (
            <div>
                <h3>{this.props.taskObj.title}</h3>
                <p>{this.props.taskObj.description}</p>
                <h5>Due date: {dueDate}</h5>
                <h5>Repeat every {this.props.taskObj.days} days</h5>
                <h5>Last time completed: {previousDate}</h5>
                <button onClick={this.doTask}>Do Task</button>
                <button onClick={this.deleteTask}>Delete Task</button>
            </div>
        );
    }
});

module.exports = TaskItem;
