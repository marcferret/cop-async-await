'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var getBeef = function getBeef() {
    setTimeout(function () {
        console.log('Get beef');
        return { meat: 'beef' };
    }, 3000);
};

var cookBeef = function cookBeef(beef) {
    setTimeout(function () {
        console.log('Cook the beef');
        return beef.meat = 'cookedBeef';
    }, 5000);
};

var getBuns = function getBuns() {
    setTimeout(function () {
        console.log('Get buns for the burger');
        return { bread: 'buns' };
    }, 1000);
};

var putBeefBetweenBuns = function putBeefBetweenBuns(beef, buns) {
    setTimeout(function () {
        console.log('Put the cooked beef between the buns');
        return Object.assign(beef, buns);
    }, 4000);
};

exports.getBeef = getBeef;
exports.cookBeef = cookBeef;
exports.getBuns = getBuns;
exports.putBeefBetweenBuns = putBeefBetweenBuns;