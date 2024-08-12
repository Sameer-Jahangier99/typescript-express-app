import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/CustomError';

const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    status: statusCode,
    message,
  });
};

export default errorHandler;
