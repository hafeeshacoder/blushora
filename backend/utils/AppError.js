// Error that carries an HTTP status code.
class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = AppError;
