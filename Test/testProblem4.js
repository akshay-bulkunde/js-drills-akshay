const {arrayOfObjects} = require('../persons.js');
const { problem4 } = require('../problems/problem4.js');

problem4(arrayOfObjects , 3);
problem4(arrayOfObjects , arrayOfObjects.length - 1);
problem4([], 3);
problem4(arrayOfObjects );