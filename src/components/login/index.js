'use strict';
/** @jsx React.DOM */

var React = require('react/addons');
var firebaseManager = require('../../util/firebaseManager');
var UserStore = require('../../stores/UserStore');

var Login = React.createClass({
    displayName: 'Login',
    getInitialState: function() {
        return {
            isLoggedIn: false,
            auth: {}
        }
    },
    componentWillMount: function() {
        console.log('mounting login');
        var store = this;
        UserStore.listen(function(userData) {
            console.log('user store updated');
            console.log(userData);

            store.setState({
                isLoggedIn: userData.isLoggedIn,
                auth: userData.auth || {}
            });

        });
    },
    loginWithGoogle: function() {
        firebaseManager.rootRef.authWithOAuthPopup('google', function(error, authData) {
            if (error) {
                console.log('Login Failed!', error);
            } else {
                console.log('Authenticated successfully with payload:', authData);
            }
        });

    },
    render: function () {
        console.log('this.state');
        console.log(this.state);

        var loginDisplay;
        if (this.state.isLoggedIn) {
            loginDisplay = <span>{this.state.auth.google.displayName}</span>;
        }
        else {
            loginDisplay = <button onClick={this.loginWithGoogle}>Login</button>;
        }

        return (
            <div>
                {loginDisplay}
            </div>
        );
    }
});

module.exports = Login;
