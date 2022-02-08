import { empty } from '../../../helpers';

function createUserMock(name, username, password) {
    if (empty(name) || empty(username) || empty(password)) {
        throw new Error('Invalid data receveid');
    }
    return true;
}

export {
    createUserMock,
};
