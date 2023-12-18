// const aaa = require('./people');

// console.log(aaa.people, aaa.ages);

const {people, ages} = require('./people');

console.log(people, ages);

const os = require('os');
console.log(os.homedir(), os.freemem(), os.platform());