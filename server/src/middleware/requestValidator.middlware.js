
import { validationResult } from 'express-validator';
import { validationErrorWithData } from '../utils/apiResponse.js';

const validate = (validations) => {
  return async (req, res, next) => {

    for (let validation of validations) {
      await validation.run(req);
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const extractedErrors = errors.array()
      return validationErrorWithData(res,"validation failed", extractedErrors)

    }

    next();
  };
};

export default validate
