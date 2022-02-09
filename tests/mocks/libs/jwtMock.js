import casual from 'casual';

function signMock() {
    return `${casual.string}.${casual.string}.${casual.string}`;
}

export {
    signMock,
};
