var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [x, y] = lines.shift().trim().split(" ").map((x) => parseFloat(x));

function determinePosicao(x, y) {
    if (x === 0 && y === 0) {
        return "Origem";
    } else if (x === 0) {
        return "Eixo Y";
    } else if (y === 0) {
        return "Eixo X";
    } else if (x > 0 && y > 0) {
        return "Q1";  // Primeiro quadrante
    } else if (x < 0 && y > 0) {
        return "Q2";  // Segundo quadrante
    } else if (x < 0 && y < 0) {
        return "Q3";  // Terceiro quadrante
    } else if (x > 0 && y < 0) {
        return "Q4";  // Quarto quadrante
    }
}

console.log(determinePosicao(x, y));
