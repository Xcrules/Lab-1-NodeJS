const crypto = require("crypto");

const random = crypto.randomInt(1, 7);

console.log("Dice value:", random);
