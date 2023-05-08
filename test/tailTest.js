const tail = require('../tail');

const tailArray = tail(['Hello','Lighthouse','Labs']);
assertEqual(tailArray[0], "Lighthouse"); 
assertEqual(tailArray[1], "Labs");