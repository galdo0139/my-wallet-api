import { empty } from '../../../helpers';

async function createUserMock(name, username, password) {
    if (empty(name) || empty(username) || empty(password)) {
        throw new Error('Invalid data receveid');
    }
    return true;
}

async function userFoundedByUsernameMock(username) {
    return { id: 1, username };
}

async function userNotFoundedByUsernameMock() {
    return null;
}

export {
    createUserMock,
    userFoundedByUsernameMock,
    userNotFoundedByUsernameMock,
};
