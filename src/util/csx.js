'use strict';

var _ = require('lodash');

module.exports = function(/* object args */) {
    var argsArray = _.toArray(arguments);
    return _.merge.apply(_, [{}].concat(argsArray));
};
