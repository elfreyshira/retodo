'use strict';
/** @jsx React.DOM */
var React = require('react');
var TaskActions = require('../../actions/TaskActions');
var _ = require('lodash');
var FormInteractions = require('../../mixins/FormInteractions');

var CreateTask = React.createClass({
    displayName: 'CreateTask',
    mixins: [FormInteractions],
    createTask: function(evt) {
        evt.preventDefault();
        var formValues = this.getFormValues(['title', 'description', 'days'], true);
        TaskActions.createTask(formValues);
    },
    render: function () {
        return (
            <form onSubmit={this.createTask}>
                <h5>Title</h5>
                <input type="text" required="true" ref="title"></input>

                <h5>Description</h5>
                <textarea ref="description"></textarea>

                <h5>Redo after:</h5>
                <input type="text" pattern="\d+" title="Number of days" required="true" ref="days">
                </input> days

                <br/>
                <button type="submit">Create Task</button>
            </form>
        );
    }
});

module.exports = CreateTask;
