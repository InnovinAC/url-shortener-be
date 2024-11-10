import createError from 'http-errors';

class Exception {
    /**
     * Creates an HTTP error using the http-errors package.
     * @param {number} status - The HTTP status code.
     * @param {string} message - The error message.
     * @returns {Error} - An error with HTTP status and message.
     */
    static http(status: number = 500, message: string = 'An error occurred'): Error {
        return createError(status, message);
    }
}

export default Exception;
