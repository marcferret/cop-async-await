const Burger = require("./burger");
const GoikoGrill = new Burger();

class Chef {
  static makeBurger(nextStep) {
    GoikoGrill.getBeef(function (error, beef) {
      if (error) {
        Chef.handleError(error);
      }
      GoikoGrill.cookBeef(beef, function (error, cookedBeef) {
        if (error) {
          Chef.handleError(error);
        }
        GoikoGrill.getBuns(function (error, buns) {
          GoikoGrill.putBeefBetweenBuns(cookedBeef, buns, function (error, burger) {
            if (error) {
              Chef.handleError(error);
            }
            return nextStep(burger);
          })
        })
      })
    })
  };

  static makeBetterBurger() {

  };

  static serveBurger(burger) {
    const li = Burger.createLiElement(`Yeah, ${burger} ready to serve 🍔!`);
    GoikoGrill.appendChildBurgerSteps(li);
  }

  static serveBetterBurger(burger) {
    const li = Burger.createLiElement(`Yeah, ${burger} ready to serve 🍔!`);
    GoikoGrill.appendChildBetterBurgerSteps(li);
  }

  static clearTheTable() {
    GoikoGrill.clearBurgerSteps();
  }

  static handleError(error) {
    console.error(error.message);
  }
}

module.exports = Chef;
