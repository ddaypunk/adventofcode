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
    const data = readTestData();
    return sumArray(data, 0);
    // or you can do this
    // return data.reduce(sumTwoNumbers, 0);
}

function part2() {
    const data = readTestData();
    var sum = 0;
    var freqs = new Set();

    while(true) {
        for(const datum of data) {
            sum += datum;
            if(freqs.has(sum)) {
                return sum;
            }
            freqs.add(sum);
        }
    }
}

console.log('---Part1---\r\n', part1());

console.log('---Part1---\r\n', part2());
