import { getBeef, cookBeef, getBuns, putBeefBetweenBuns } from './lib';

const makeBurger = nextStep => {
    getBeef(function (beef) {
        cookBeef(beef, function (cookedBeef) {
            getBuns(function (buns) {
                putBeefBetweenBuns(buns, cookedBeef, function(burger) {
                    return burger;
                })
            })
        })
    })
};

// Make and serve the burger
makeBurger((burger) => {
    console.log(burger);
});