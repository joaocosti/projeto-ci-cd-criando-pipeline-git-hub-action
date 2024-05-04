const request = require('supertest');
const app = require('../app');

describe('Testes de Integração', () => {

    test('Deve retornar a página inicial', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('text/html');
    });

    test('Deve retornar a página de cálculo fatorial', async () => {
        const response = await request(app).get('/fatorial');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('text/html');
    });

    test('Deve retornar a página de cálculo exponencial', async () => {
        const response = await request(app).get('/exponencial');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('text/html');
    });

    test('Deve calcular o fatorial corretamente', async () => {
        const response = await request(app)
            .post('/api/fatorial')
            .send({ numero: 5 });
        expect(response.status).toBe(200);
        expect(response.body.resultado).toBe(120);
    });

    test('Deve calcular o exponencial corretamente', async () => {
        const response = await request(app)
            .post('/api/exponencial')
            .send({ base: 2, expoente: 3 });
        expect(response.status).toBe(200);
        expect(response.body.resultado).toBe(8);
    });
});
