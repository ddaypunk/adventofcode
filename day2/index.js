const fs = require('fs');

// str -> number
const toNumber = i => Number(i);
// number -> number -> number
const sumTwoNumbers = (a, b) => a + b;
// [] -> initialValue -> []
const sumArray = (array, initalValue) => array.reduce(sumTwoNumbers, initalValue);


// void -> []
function readTestData() {
    return fs
        .readFileSync('data.txt')
        .toString()
        .split(/\r?\n/)
        .filter(Boolean)
        .map(toNumber);
}
 

function part1 () {
}

function part2() {
}

console.log('---Part1---\r\n', part1());

console.log('---Part1---\r\n', part2());
