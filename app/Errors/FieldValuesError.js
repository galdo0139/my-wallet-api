class FieldValuesError extends Error {
    constructor({ error, message }) {
        super(error || 'FieldValuesError');
        this.statusCode = 400;
        this.message = message || 'The sended data is incorrect';
    }
}

export default FieldValuesError;
