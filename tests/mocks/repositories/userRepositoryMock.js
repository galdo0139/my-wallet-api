import { empty } from '../../../app/helpers/helpers';
import { createUser } from '../../factories/userFactory';

async function createUserMock(name, username, password) {
    if (empty(name) || empty(username) || empty(password)) {
        throw new Error('Invalid data receveid');
    }
    return true;
}

async function userFoundedByUsernameMock(username) {
    const user = createUser();
    return { id: 1, username, name: user.name };
}

async function userNotFoundedByUsernameMock() {
    return null;
}

export {
    createUserMock,
    userFoundedByUsernameMock,
    userNotFoundedByUsernameMock,
};
