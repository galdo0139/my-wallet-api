import { connection } from '../../databaseConnection.js';

async function create(name, username, password) {
    await connection.query(
        'insert into users (name, username, password) values($1, $2, $3)',
        [name, username, password],
    );
}

async function findByUsername(username) {
    const user = await connection.query('select * from users where username = $1', [username]);
    return user.rows[0] || null;
}

export {
    create,
    findByUsername,
};
