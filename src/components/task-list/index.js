'use strict'
/** @jsx React.DOM */

var React = require('react/addons');
var TaskStore = require('../../stores/TaskStore');
var TaskItem = require('../task-item');
var _ = require('lodash');
var dates = require('../../util/dates');

var TaskList = React.createClass({
    displayName: 'TaskList',
    getInitialState: function() {
        return {
            data: {}
        };
    },
    componentWillMount: function() {
        var self = this;
        TaskStore.listen(function(data) {
            self.setState({
                data: data
            });
        });
    },
    render: function () {
        var dataJson = JSON.stringify(this.state.data, null, 4)

        var orderedTasks = _(this.state.data)
            .pairs()
            .sortBy(function(taskPair) {
                var taskObj = taskPair[1];
                // Limit the scale to between -3 and 3
                var scale = Math.min(
                    3, Math.max(
                        -3, dates.daysFromNow(taskObj.nextDate) / parseInt(taskObj.days)
                    )
                );
                return scale;
            })
            .value();

        var taskList = _.map(orderedTasks, function(taskPair) {
            var taskId = taskPair[0];
            var taskObj = taskPair[1];
            return <TaskItem taskObj={taskObj} taskId={taskId} key={taskId}/>;
        });

        return (
            <div>
                <pre>{dataJson}</pre>
                {taskList}
            </div>
        );
    }
});

module.exports = TaskList;
