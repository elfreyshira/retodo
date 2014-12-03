'use strict';

var React = require('react');
var Actions = require('../../actions');
// var _ = require('lodash');
// var ListItem = require('../list-item/list-item.jsx');
// var TaskStore = require('../../stores').TaskStore;

var CreateTask = React.createClass({

    // getInitialState: function() {
    //     return {
    //         hello: 'Hello!',
    //         lol: 'lol'
    //     };
    // },
    render: function() {
        return (
            <form>
                <label>Text <input type="text" ref="text"/></label>
                <label>Days <input type="text" ref="days"/></label>
                <input type="button" value="Create" onClick={this.createTask}/>
            </form>
        );
    },
    createTask: function() {
        var textValue = this.refs.text.getDOMNode().value;
        var daysValue = this.refs.days.getDOMNode().value;
        Actions.createTask({
            text: textValue,
            days: daysValue
        });
    }
    // componentDidMount: function() {
    //     TaskStore.listen(this.onListChange);
    //     this.setState(TaskStore.getList());
    // },
    // onListChange: function(taskList) {
    //     this.setState(taskList);
    // }


});

module.exports = CreateTask;
