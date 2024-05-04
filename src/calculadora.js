function calcularFatorial(numero) {
    if (numero < 0) {
        return 'O número deve ser um valor positivo.';
    } else if (typeof numero !== 'number') {
        return 'Deve ser informado um número';
    }
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado += i;
    }
    return resultado;
}

function calcularExponencial(base, expoente) {
    return Math.pow(base, expoente);
}

module.exports = { calcularFatorial, calcularExponencial };