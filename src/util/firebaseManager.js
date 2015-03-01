'use strict'

var Firebase = require('firebase');

var rootRef = new Firebase('https://retodo.firebaseio.com/');

function getUserRef(userUID) {
    return rootRef.child(userUID);
}

module.exports = {
    rootRef: rootRef,
    getUserRef: getUserRef
};
