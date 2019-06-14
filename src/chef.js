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
    let food = null;
    let bread = null;
    Burger.getBetterBeef()
      .then((response) => {
        GoikoGrill.appendChildBurgerSteps(Burger.createLiElement(response.data.food));
        return Burger.cookBetterBeef(response.data.food);
      })
      .then((response) => {
        food = response.data.food;
        GoikoGrill.appendChildBurgerSteps(Burger.createLiElement(food));
        return Burger.getBetterBuns();
      })
      .then((response) => {
        bread = response.data.food;
        GoikoGrill.appendChildBurgerSteps(Burger.createLiElement(bread));
        return Burger.putBetterBeefBetweensBuns(food, bread);
      })
      .then((response) => {
        GoikoGrill.appendChildBurgerSteps(Burger.createLiElement(response.data.food));
        this.serveBurger(response.data.food);
      })
      .catch(error => Chef.handleError(error));
  };

  static async makeWowBurger() {
    /*
    let beef = await Burger.getBetterBeef();
    GoikoGrill.appendChildBurgerSteps(Burger.createLiElement(beef.data.food));
    let cookedBeef = await Burger.cookBetterBeef(beef.data.food);
    GoikoGrill.appendChildBurgerSteps(Burger.createLiElement(cookedBeef.data.food));
    let bread = await Burger.getBetterBuns();
    GoikoGrill.appendChildBurgerSteps(Burger.createLiElement(bread.data.food));
    let burger = await Burger.putBetterBeefBetweensBuns(cookedBeef.data.food, bread.data.food);
    GoikoGrill.appendChildBurgerSteps(Burger.createLiElement(burger.data.food));
    return this.serveBurger(burger.data.food);
    */

    let beefPromise = Burger.getBetterBeef();
    let breadPromise = Burger.getBetterBuns();
    let beef = await beefPromise;
    GoikoGrill.appendChildBurgerSteps(Burger.createLiElement(beef.data.food));
    let cookedBeefPromise = Burger.cookBetterBeef(beef.data.food);
    let bread = await breadPromise;
    GoikoGrill.appendChildBurgerSteps(Burger.createLiElement(bread.data.food));
    let cookedBeef = await cookedBeefPromise;
    GoikoGrill.appendChildBurgerSteps(Burger.createLiElement(cookedBeef.data.food));
    let burger = await Burger.putBetterBeefBetweensBuns(cookedBeef.data.food, bread.data.food);
    GoikoGrill.appendChildBurgerSteps(Burger.createLiElement(burger.data.food));
    return this.serveBurger(burger.data.food);
  }

  static serveBurger(burger) {
    const li = Burger.createLiElement(`Yeah, ${burger} ready to serve 🍔!`);
    GoikoGrill.appendChildBurgerSteps(li);
  }

  static clearTheTable() {
    GoikoGrill.clearBurgerSteps();
  }

  static handleError(error) {
    console.error(error.message);
  }
}

module.exports = Chef;
