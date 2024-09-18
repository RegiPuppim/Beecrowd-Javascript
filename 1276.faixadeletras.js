var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function processarFaixas(string) {
    // Remover espaços e letras duplicadas
    var letras = [...new Set(string.replace(/\s+/g, '').split(''))];

    // Se não houver letras, retorne uma linha em branco
    if (letras.length === 0) return '';

    // Ordenar letras em ordem alfabética
    letras.sort();

    var faixas = [];
    var inicio = letras[0];
    var fim = letras[0];

    for (var i = 1; i < letras.length; i++) {
        if (letras[i].charCodeAt(0) === letras[i - 1].charCodeAt(0) + 1) {
            // Continua a sequência
            fim = letras[i];
        } else {
            // Adiciona a faixa anterior e inicia uma nova
            faixas.push(`${inicio}:${fim}`);
            inicio = fim = letras[i];
        }
    }

    // Adicionar a última faixa
    faixas.push(`${inicio}:${fim}`);

    // Retornar a string com faixas separadas por vírgulas e sem espaços extras
    return faixas.join(', ');
}

lines.forEach(function(linha, index) {
    var trimmedLine = linha.trim();
    var resultado = trimmedLine === '' ? '' : processarFaixas(trimmedLine);

    // Verificar se estamos na última linha não vazia da entrada
    if (resultado !== '') {
        if (index < lines.length - 1) {
            console.log(resultado);
        } else {
            // Para a última linha, evitar nova linha extra
            process.stdout.write(resultado);
        }
    } else if (trimmedLine === '' && index < lines.length - 1) {
        // Imprime linha em branco para linhas vazias, mas não após a última
        console.log('');
    }
});
