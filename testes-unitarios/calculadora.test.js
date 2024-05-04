const { calcularFatorial, calcularExponencial } = require('../src/calculadora');

describe('Testes para a função calcularFatorial', () => {
    test('Deve calcular corretamente o fatorial de um número positivo', () => {
        expect(calcularFatorial(5)).toBe(120);
        expect(calcularFatorial(0)).toBe(1);
    });

    test('Deve retornar uma mensagem de erro para números negativos', () => {
        expect(calcularFatorial(-5)).toBe('O número deve ser um valor positivo.');
    });

    test('Deve retornar uma mensagem de erro para tipos de entrada inválidos', () => {
        expect(calcularFatorial('abc')).toBe('Deve ser informado um número');
    });
});

describe('Testes para a função calcularExponencial', () => {
    test('Deve calcular corretamente o exponencial de dois números', () => {
        expect(calcularExponencial(2, 3)).toBe(8);
        expect(calcularExponencial(-2, 3)).toBe(-8);
        expect(calcularExponencial(5, 2)).toBe(25);
        expect(calcularExponencial(-5, 2)).toBe(25);
        expect(calcularExponencial(4, 0)).toBe(1);
        expect(calcularExponencial(0, 4)).toBe(0);
    });
});
