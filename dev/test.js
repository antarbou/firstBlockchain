const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
bitcoin.createNewBlock(89243, 'AZ54ZRZ5R 4Z54Z54', 'DDD544SF45SF');

bitcoin.createNewTransaction(100, 'ALEXSD5445DS4D5SD4', 'JEENSSSF54545454F');

bitcoin.createNewBlock(123123, 'A123456 4Z54Z54', 'B123456AZAZAZ');

bitcoin.createNewTransaction(50, 'ALEXSD5445DS4D5SD4', 'JEENSSSF54545454F');
bitcoin.createNewTransaction(300, 'ALEXSD5445DS4D5SD4', 'JEENSSSF54545454F');
bitcoin.createNewTransaction(2000, 'ALEXSD5445DS4D5SD4', 'JEENSSSF54545454F');

bitcoin.createNewBlock(9878787, 'A12DSDS3456 4Z54Z54', 'SDSDB123456AZAZAZ');

console.log(bitcoin.chain[2]);