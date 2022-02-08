// import DatabaseTestError from '../../../app/Errors/DatabaseTestError';

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
