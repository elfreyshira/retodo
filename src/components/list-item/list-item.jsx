'use strict'

var React = require('react');
var _ = require('lodash');
var Actions = require('../../actions');

var ListItem = React.createClass({

    render: function() {
        var data = this.props.lol;
        var deeds = _.map(data.deeds, function(deed) {
            return (
                <li>
                    <p> Date: {deed.date} </p>
                    <p> Note: {deed.text} </p>
                </li>
            );
        });
        return (
            <li>
                <input type="button" value="Delete"
                    onClick={_.partial(Actions.deleteTask, this.props.taskId)}/>

                <form>
                    <input type="text" ref="doText"/>
                    <input type="button" value="Do"
                        onClick={this.doTask}/>
                </form>
                <p>
                    Text: {data.text}
                </p>
                <p>
                    Days: {data.days}
                </p>
                <p>
                    Next: {data.nextDate}
                </p>
                <p>
                    Created: {data.creationDate}
                </p>
                <p>
                    <ul>Deeds: {deeds}</ul>
                </p>
            </li>
        );
    },


    doTask: function() {
        Actions.doTask(
            this.props.taskId,
            this.refs.doText.getDOMNode().value
        );
    }
});

module.exports = ListItem;
