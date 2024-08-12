export interface CustomError extends Error {
    status?: number;
  }
  
  export const createCustomError = (status: number, message: string): CustomError => {
    const error = new Error(message) as CustomError;
    error.status = status;
    return error;
  };
  
  export const createValidationError = (message: string): CustomError => {
    return createCustomError(400, message);
  };
  
  export const createNotFoundError = (message: string): CustomError => {
    return createCustomError(404, message);
  };
  