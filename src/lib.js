const getBeef = () => {
    setTimeout(() => {
        console.log('Get beef');
        return { meat: 'beef' };
    }, 3000);
};

const cookBeef = (beef) => {
    setTimeout(() => {
        console.log('Cook the beef');
        return beef.meat = 'cookedBeef';
    }, 5000);
};

const getBuns = () => {
    setTimeout(() => {
        console.log('Get buns for the burger');
        return { bread: 'buns' };
    }, 1000);
};

const putBeefBetweenBuns = (beef, buns) => {
    setTimeout(() => {
        console.log('Put the cooked beef between the buns');
        return Object.assign(beef, buns);
    }, 4000);
};

export { getBeef, cookBeef, getBuns, putBeefBetweenBuns };