/** @jsx React.DOM */
var React = require('react');
var style = require('./style');

var Body = React.createClass({
    displayName: 'Body',
    render: function () {
        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Body;
