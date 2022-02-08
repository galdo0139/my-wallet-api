class DatabaseTestError extends Error {
    constructor({ error, message }) {
        super(error || 'DatabaseTestError');
        this.statusCode = 500;
        this.message = message || 'Simulating a database query error';
    }
}

export default DatabaseTestError;
