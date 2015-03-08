'use strict';

function gray(percentage) {
    var value = Math.round(percentage/100*255);
    var valueString = [value, value, value].join(',');
    return `rgb(${valueString})`;
}

var taskItem = {
    backgroundColor: '#fcfcfc',
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    boxShadow: '0px 0px 2px 2px #ddd'
};

var description = {
    fontSize: '14px',
};

var info = {
    fontSize: '12px',
};

var line = {
    borderBottom: '1px solid #ccc',
    margin: '10px auto'
};

var space = {
    margin: '15px auto'
};

var buttonDefault = {
    boxShadow: `0px 0px 1px 1px ${gray(93)}`,
    padding: '10px',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#555'
};

var doButton = {
    width: '100%',
    border: '1px solid #EEF',
    backgroundColor: '#EEF'
};

var sideButton = {
    width: '48%'
};

var deleteButton = {
    border: '1px solid #FEE',
    backgroundColor: '#FEE'
};

var editButton = {
    border: '1px solid #FED',
    backgroundColor: '#FED'
};


module.exports = {
    taskItem, description, info, line, doButton, buttonDefault, space, deleteButton, sideButton, editButton
};
