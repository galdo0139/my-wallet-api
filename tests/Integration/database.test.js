import '../../config/enviromentSetup.js';
import { connection } from '../../config/databaseConnection';
import { createUser } from '../factories/userFactory';
import databaseHelper from '../databaseHelper/databaseHelper.js';

beforeAll(() => {
    databaseHelper.clearTable('users');
});

afterAll(() => {
    databaseHelper.clearTable('users');
    connection.end();
});

describe('Database connection', () => {
    it('should sucessfully make a query to the database', async () => {
        const user = createUser();

        await connection.query(
            'insert into users (name, username, password) VALUES ($1, $2, $3)',
            [user.name, user.username, user.password],
        );

        const result = await connection.query(
            'select * from users where username = $1',
            [user.username],
        );

        const retrivedUser = result.rows[0];
        expect(retrivedUser).toEqual(
            expect.objectContaining({
                name: user.name,
                username: user.username,
            }),
        );
    });
});
