let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

// Lê os valores de A e B
let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

// Calcula a soma
let SOMA = A + B;

// Exibe o resultado 
console.log(`SOMA = ${SOMA}`);