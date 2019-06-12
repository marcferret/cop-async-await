'use strict';

var _lib = require('./lib');

var makeBurger = function makeBurger(nextStep) {
    (0, _lib.getBeef)(function (beef) {
        (0, _lib.cookBeef)(beef, function (cookedBeef) {
            (0, _lib.getBuns)(function (buns) {
                (0, _lib.putBeefBetweenBuns)(buns, cookedBeef, function (burger) {
                    return burger;
                });
            });
        });
    });
};

// Make and serve the burger
makeBurger(function (burger) {
    console.log(burger);
});