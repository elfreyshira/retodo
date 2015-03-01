'use strict';

var Reflux = require('reflux');
var firebaseManager = require('../util/firebaseManager');

module.exports = Reflux.createStore({
    init: function() {
        var store = this;
        this._userStore = {};

        var userAuth = firebaseManager.rootRef.getAuth();
        if (userAuth) {
            this._userStore.isLoggedIn = true;
            this._userStore.auth = userAuth;
        }
        else {
            this._userStore.isLoggedIn = false;
        }

        console.log('this._userStore');
        console.log(JSON.stringify(this._userStore, null, 4));

        setTimeout(function(){
            store.trigger(store._userStore);
        }, 0)

    }
});
