import { connection } from '../../databaseConnection.js';

const userRepository = {
    async create(name, username, password) {
        const result = await connection.query(
            'insert into users (name, username, password) values($1, $2, $3)',
            [name, username, password],
        );

        return result.rowCount >= 1;
    },

    async findByUsername(username) {
        const user = await connection.query('select * from users where username = $1', [username]);
        return user.rows[0] || null;
    },
};

export default userRepository;
