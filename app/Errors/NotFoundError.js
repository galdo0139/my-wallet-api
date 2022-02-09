class NotFoundError extends Error {
    constructor({ error, message }) {
        super(error || 'NotFoundError');
        this.statusCode = 404;
        this.message = message || 'The requested item was not found';
    }
}

export default NotFoundError;
