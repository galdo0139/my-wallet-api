class InvalidQueryTestError extends Error {
    constructor({ error, message }) {
        super(error || 'InvalidQueryTestError');
        this.statusCode = 500;
        this.message = message || 'Simulating a database query error';
    }
}

export default InvalidQueryTestError;
