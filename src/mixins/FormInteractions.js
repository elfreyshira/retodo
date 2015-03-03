'use strict';
var _ = require('lodash');

var FormInteractions = {

    // ***
    // Accepts an array of ref strings
    // Returns an object with key/value as ref/refValue
    // If second arg is `true`, the form values will be reset.
    // 
    // @param refsArray {Array[String]}
    // @param shouldResetForm {Boolean}
    // @return {Object}
    // 
    // Example:
    // this.getFormValues(['title', 'description']);
    // --> {title: 'hello', description: 'this is a world'}
    // 
    // ***
    getFormValues: function(refsArray, shouldResetForm) {

        if (!_.isArray(refsArray)) {
            throw new Error('First argument must be an array of strings.');
        }

        var self = this;
        var refsValues = _.map(refsArray, function(ref) {
            var elem = self.refs[ref].getDOMNode();
            var userInputValue = elem.value;
            if (shouldResetForm) {
                elem.value = '';
            }
            return userInputValue;
        });
        return _.zipObject(refsArray, refsValues);
    }
};

module.exports = FormInteractions;
