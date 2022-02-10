import supertest from 'supertest';
import app from '../../app';
import { connection } from '../../config/databaseConnection';
import { createInvalidUser, createUser } from '../factories/userFactory';
import userRepository from '../../app/repositories/userRepository';
import databaseHelper from '../databaseHelper/databaseHelper';
import databaseUser from '../databaseHelper/databaseUser';

beforeEach(() => {
    databaseHelper.clearTable('users');
});

beforeAll(() => {
    databaseHelper.clearTable('users');
});

afterAll(() => {
    databaseHelper.clearTable('users');
    connection.end();
});

describe('POST /sign-up', () => {
    it('should return 201 for valid params', async () => {
        const body = createUser();

        const result = await supertest(app).post('/sign-up').send(body);
        const createdUser = await userRepository.findByUsername(body.username);

        expect(result.status).toEqual(201);
        expect(createdUser.username).toEqual(body.username);
    });

    it('should return 400 for invalid params', async () => {
        const body = createInvalidUser();

        const result = await supertest(app).post('/sign-up').send(body);
        const createdUser = await userRepository.findByUsername(body.username);

        expect(result.status).toEqual(400);
        expect(createdUser).toEqual(null);
    });
});

describe('POST /sing-in', () => {
    it('shoud sucessfully sign in when using correct credentials', async () => {
        const user = await databaseUser.registerUser();
        const { name, username, password } = user;

        const result = await supertest(app).post('/sign-in').send({ username, password });

        expect(result.status).toEqual(200);
        expect(result.body).toEqual(
            expect.objectContaining({
                username,
                name,
            }),
        );
    });

    it('shoud fail sign in when using incorrect credentials', async () => {
        const user = await databaseUser.registerUser();
        const { username, password } = user;

        const result = await supertest(app).post('/sign-in').send({ username: `wrong${username}`, password });

        expect(result.status).toEqual(400);
    });
});
