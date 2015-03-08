'use strict';
/** @jsx React.DOM */
var React = require('react');
var dates = require('../../util/dates');
var TaskActions = require('../../actions/TaskActions');
var FormInteractions = require('../../mixins/FormInteractions');
var style = require('./style');
var headers = require('../../style/headers');
var position = require('../../style/position');
var csx = require('../../util/csx');


var SplitLine = React.createClass({
    displayName: 'SplitLine',
    render: function () {
        return (
            <div style={style.line}></div>
        );
    }
});

var Space = React.createClass({
    displayName: 'Space',
    render: function () {
        return (
            <div style={style.space}></div>
        );
    }
});

var EditItem = React.createClass({
    displayName: 'EditItem',
    mixins: [FormInteractions],
    propTypes: {
        taskObj: React.PropTypes.object.isRequired,
        taskId: React.PropTypes.string.isRequired,
        toggleEditingTask: React.PropTypes.func.isRequired
    },
    editTask: function(evt) {
        evt.preventDefault();
        var formValues = this.getFormValues(['title', 'description', 'days']);
        TaskActions.editTask(this.props.taskId, formValues);
        this.props.toggleEditingTask();
    },
    render: function () {
        var dueDate = dates.getDayFrom(this.props.taskObj.nextDate);
        var previousDate = dates.getDayFrom(this.props.taskObj.previousDate) || 'N/A';

        return (
            <div>
                <form onSubmit={this.editTask}>
                    <input required="true" defaultValue={this.props.taskObj.title} ref="title"></input>
                    <textarea defaultValue={this.props.taskObj.description} ref="description"></textarea>
                    <h5>Due date: {dueDate}</h5>
                    <h5>Repeat every
                        <input pattern="\d+" title="Number of days"
                            required="true" defaultValue={this.props.taskObj.days} ref="days">
                        </input>
                        days
                    </h5>
                    <h5>Last time completed: {previousDate}</h5>
                    <div>
                        <button type="button" onClick={this.props.toggleEditingTask}>Cancel Edit</button>
                        <button type="submit">Save Task</button>
                    </div>
                </form>
            </div>
        );
    }
});

var ShowItem = React.createClass({
    displayName: 'ShowItem',
    propTypes: {
        taskObj: React.PropTypes.object.isRequired,
        taskId: React.PropTypes.string.isRequired,
        toggleEditingTask: React.PropTypes.func.isRequired
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
            <div style={style.taskItem}>
                <h2 style={headers.h2}>
                    {this.props.taskObj.title}
                </h2>
                <SplitLine />

                <div style={style.description}>
                    {this.props.taskObj.description}
                </div>
                <SplitLine />

                <div style={style.info}>Due date: {dueDate}</div>
                <div style={style.info}>Repeat every {this.props.taskObj.days} days</div>
                <div style={style.info}>Last time completed: {previousDate}</div>

                <Space />
                <div>
                    <button style={csx(style.buttonDefault, style.doButton)} onClick={this.doTask}>
                        DO TASK
                    </button>
                    <Space />
                    <button
                        onClick={this.deleteTask}
                        style={csx(style.buttonDefault, style.sideButton, style.deleteButton)}
                    >
                        DELETE
                    </button>
                    <button
                        onClick={this.props.toggleEditingTask}
                        style={csx(style.buttonDefault, style.sideButton, style.editButton, position.pullRight)}
                    >
                        EDIT
                    </button>
                </div>
            </div>
        );
    }
});


var TaskItem = React.createClass({
    displayName: 'TaskItem',
    propTypes: {
        taskId: React.PropTypes.string.isRequired,
        taskObj: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            isEditing: false
        };
    },
    toggleEditingTask: function() {
        this.setState({
            isEditing: !this.state.isEditing
        });
    },
    render: function () {
        if (this.state.isEditing) {
            return <EditItem
                taskObj={this.props.taskObj}
                taskId={this.props.taskId}
                toggleEditingTask={this.toggleEditingTask}
            />;
        }
        else {
            return <ShowItem
                taskObj={this.props.taskObj}
                taskId={this.props.taskId}
                toggleEditingTask={this.toggleEditingTask}
                style={style}
            />;
        }
    }
});

module.exports = TaskItem;
