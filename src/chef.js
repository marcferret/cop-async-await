const Burger = require("./burger");
const GoikoGrill = new Burger();

class Chef {
    static makeBurger(nextStep) {
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

    static serveBurger(burger) {
        const li = Burger.createLiElement(`Yeah, ${burger} ready to serve 🍔!`);
        GoikoGrill.appendChildBurgerSteps(li);
    }

    static clearTheTable() {
        GoikoGrill.clearBurgerSteps();
    }
}

module.exports = Chef;
