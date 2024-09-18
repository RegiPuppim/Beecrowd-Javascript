var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

let N = parseInt(lines[0]); // qtd de anões
let X = parseInt(lines[1]); // distância até a Montanha Solitária

let qtdDias = X / (N + 2); // N anões + 2 (Gandalf e Bilbo)

console.log(qtdDias.toFixed(2));