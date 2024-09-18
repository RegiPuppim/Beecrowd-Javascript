var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [X, Y] = lines[0].split(' ').map(Number);

let contador = 1;

while (contador <= Y) {
    let line = [];
    for (let i = 0; i < X && contador <= Y; i++) {
        line.push(contador++);
    }
    console.log(line.join(' '));
}