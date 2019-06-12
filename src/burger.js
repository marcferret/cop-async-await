const axios = require('axios');

class Burger {

    static createLiElement(text) {
        const li = document.createElement("li");
        const node = document.createTextNode(text);
        li.appendChild(node);
        return li;
    }

    constructor() {
        this.burgerSteps = document.getElementById('burgerSteps');
    }

    appendChildBurgerSteps(node) {
        this.burgerSteps.append(node);
    }

    clearBurgerSteps() {
        while (this.burgerSteps.hasChildNodes()) {
            this.burgerSteps.removeChild(this.burgerSteps.firstChild);
        }
    }

    runCallback(response, callback) {
        const food = response.data.food;
        this.burgerSteps.append(Burger.createLiElement(food));
        return callback(food);
    }

    getBeef(callback) {
        axios.get('https://my-json-server.typicode.com/marcferret/cop-async-await/beef')
            .then((response) => {
                this.runCallback(response, callback);
            });
    };

    cookBeef(beef, callback) {
        axios.get('https://my-json-server.typicode.com/marcferret/cop-async-await/cookedBeef', {
                params: {
                    meat: beef,
                },
            })
            .then((response) => {
                this.runCallback(response, callback);
            });
    };

    getBuns(callback) {
        axios.get('https://my-json-server.typicode.com/marcferret/cop-async-await/buns')
            .then((response) => {
                this.runCallback(response, callback);
            });
    };

    putBeefBetweenBuns(beef, buns, callback) {
        axios.get('https://my-json-server.typicode.com/marcferret/cop-async-await/burger', {
                params: {
                    meat: beef,
                    bread: buns,
                },
            })
            .then((response) => {
                this.runCallback(response, callback);
            });
    };
}

module.exports = Burger;
