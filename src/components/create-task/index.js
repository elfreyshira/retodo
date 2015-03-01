'use strict';
/** @jsx React.DOM */
var React = require('react');
var TaskActions = require('../../actions/TaskActions');
var _ = require('lodash');

var CreateTask = React.createClass({
    displayName: 'CreateTask',
    getFormValues: function(refsArray) {
        var self = this;
        var refsValues = _.map(refsArray, function(ref) {
            var elem = self.refs[ref].getDOMNode();
            var userInputValue = elem.value;
            elem.value = '';
            return userInputValue;
        });
        return _.zipObject(refsArray, refsValues);
    },
    createTask: function(evt) {
        evt.preventDefault();
        var formValues = this.getFormValues(['title', 'description', 'days']);
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
                <input type="submit" value="Submit"></input>
            </form>
        );
    }
});

module.exports = CreateTask;
