class InvalidCredentialsError extends Error {
    constructor({ error, message }) {
        super(error || 'InvalidCredentialsError');
        this.statusCode = 400;
        this.message = message || 'The username or password provided are incorrect';
    }
}

export default InvalidCredentialsError;
