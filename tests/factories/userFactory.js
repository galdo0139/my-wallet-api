import casual from 'casual';

function createUser() {
    const password = `${casual.password}`;
    const user = {
        name: casual.name,
        username: casual.username,
        password,
        password_confirmation: password,
    };

    return user;
}

function createInvalidUser() {
    const user = {
        name: casual.name,
        username: casual.username,
        password: casual.password,
        password_confirmation: casual.password,
    };

    return user;
}

export {
    createUser,
    createInvalidUser,
};
