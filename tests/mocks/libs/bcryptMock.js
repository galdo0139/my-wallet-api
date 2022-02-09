function passwordHashMock(password, salt) {
    return `${password}_${salt}`;
}

function compareValidPasswordMock() {
    return true;
}

function compareInvalidPasswordMock() {
    return false;
}

export {
    passwordHashMock,
    compareValidPasswordMock,
    compareInvalidPasswordMock,
};
