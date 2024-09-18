var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

while (lines.length > 0) {
    let [x, y] = lines.shift().trim().split(" ").map(Number);

    if (x === 0 || y === 0) {
        break;
    }

    // Determina o quadrante
    if (x > 0 && y > 0) {
        console.log("primeiro");
    } else if (x < 0 && y > 0) {
        console.log("segundo");
    } else if (x < 0 && y < 0) {
        console.log("terceiro");
    } else if (x > 0 && y < 0) {
        console.log("quarto");
    }
}