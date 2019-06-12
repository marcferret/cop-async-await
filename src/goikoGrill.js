import axios from 'axios';

class GoikoGrill {

    static createLiElement(text) {
        const li = document.createElement("li");
        const node = document.createTextNode(text);
        li.appendChild(node);
        return li;
    }

    constructor() {
        this.burgerSteps = document.getElementById('burgerSteps');
    }

    runCallback(response, callback) {
        const food = response.data.food;
        this.burgerSteps.append(GoikoGrill.createLiElement(food));
        return callback(food);
    }

    getBeef(callback) {
        axios.get('https://my-json-server.typicode.com/marcferret/cop-async-await/beef')
            .then((response) => {
                this.runCallback(response, callback);
            });
    };

    cookBeef(beef, callback) {
        axios.get('https://my-json-server.typicode.com/marcferret/cop-async-await/cookedBeef')
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
        axios.get('https://my-json-server.typicode.com/marcferret/cop-async-await/burger')
            .then((response) => {
                this.runCallback(response, callback);
            });
    };
}

export default new GoikoGrill();
