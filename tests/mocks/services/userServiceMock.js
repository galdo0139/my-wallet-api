async function existingUsernameMock() {
    return true;
}

async function unusedUsernameMock() {
    return false;
}

export {
    existingUsernameMock,
    unusedUsernameMock,
};
