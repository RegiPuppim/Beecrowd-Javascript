var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());

while (N-- > 0) {
    var M = parseInt(lines.shift());
    var numbers = lines.shift().split(' ').map(Number);

    var odds = numbers.filter(num => num % 2 !== 0);

    odds.sort((a, b) => a - b);

    var ordered = [];
    var left = 0;
    var right = odds.length - 1;

    while (left <= right) {
        if (left <= right) {
            ordered.push(odds[right--]);
        }
        if (left <= right) {
            ordered.push(odds[left++]);
        }
    }

    console.log(ordered.join(' '));
}
