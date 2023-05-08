const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual("name","name");
assertEqual(head([1,2]),1);