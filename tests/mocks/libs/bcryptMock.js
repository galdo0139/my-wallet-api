function passwordHashMock(password, salt) {
    return `${password}_${salt}`;
}

export {
    passwordHashMock,
};
