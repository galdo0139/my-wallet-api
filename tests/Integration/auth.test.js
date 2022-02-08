import supertest from 'supertest';
import app from '../../app';

describe('POST /signup', () => {
    it('returns 201 for valid params', async () => {
        const body = {
            name: 'aaa',
            username: 'galdo12asdasas',
            password: '12a3',
            password_confirmation: '12a3',
        };

        const result = await supertest(app).post('/sign-up').send(body);
        const { status } = result;

        expect(status).toEqual(201);
    });
});
