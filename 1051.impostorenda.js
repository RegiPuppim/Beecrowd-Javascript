var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines.shift().trim());

let impostoRenda = 0;

if (salario <= 2000.00) {
    console.log("Isento");
} else {
    if (salario > 2000.00 && salario <= 3000.00) {
        impostoRenda += (salario - 2000.00) * 0.08; // 1ª faixa do imposto
    } else if (salario > 3000.00 && salario <= 4500.00) {
        impostoRenda += (1000.00 * 0.08); // 1ª faixa do imposto
        impostoRenda += (salario - 3000.00) * 0.18; // 2ª faixa do imposto
    } else if (salario > 4500.00) {
        impostoRenda += (1000.00 * 0.08); // 1ª faixa do imposto
        impostoRenda += (1500.00 * 0.18); // 2ª faixa do imposto
        impostoRenda += (salario - 4500.00) * 0.28; // 3ª faixa do imposto
    }
    console.log(`R$ ${impostoRenda.toFixed(2)}`);
}
