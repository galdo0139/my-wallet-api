class DuplicatedError extends Error {
    constructor({ error, message }) {
        super(error || 'DuplicatedError');
        this.statusCode = 409;
        this.message = message || 'This item already exists';
    }
}

export default DuplicatedError;
