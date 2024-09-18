var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    let X = parseInt(lines[i]);
    
    if (X === 0) {
        break;
    }

    if (X % 2 !== 0) {
        X++;
    }

    let soma = 0;
    for (let j = 0; j < 5; j++) {
        soma += X;
        X += 2;
    }

    console.log(soma);
}
