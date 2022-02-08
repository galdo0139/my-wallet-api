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

function registerUser() {
    // user
}

export {
    createUser,
    registerUser,
};
