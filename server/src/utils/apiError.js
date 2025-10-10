// utils/AppError.js
export default class AppError extends Error {
  constructor( statusCode = 400,message) {
    super(message); // Set the error message
    this.statusCode = statusCode; // HTTP status code (e.g., 400, 404, 409)
    this.isOperational = true;    // Used to differentiate expected vs unknown errors
    Error.captureStackTrace(this, this.constructor); // Clean error stack trace
  }
}
