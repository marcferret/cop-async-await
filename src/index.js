import GoikoGrill from './goikoGrill';

const makeBurger = nextStep => {
    GoikoGrill.getBeef(function (beef) {
        GoikoGrill.cookBeef(beef, function (cookedBeef) {
            GoikoGrill.getBuns(function (buns) {
                GoikoGrill.putBeefBetweenBuns(buns, cookedBeef, function(burger) {
                    return nextStep(burger);
                })
            })
        })
    })
};

// Make and serve the burger
makeBurger((burger) => {
    console.log(burger);
});