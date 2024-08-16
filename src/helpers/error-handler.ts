import { Response } from 'express';
import { ErrorTypesEnum } from '../enums/error-types-enum';

interface ErrorWithMessage {
  message: string;
}

const ERROR_PATTERN = {
  [ErrorTypesEnum.NOT_FOUND]: {
    status: 404,
    message: 'Record not found.',
  },
};

export const handleError = (
  res: Response,
  error: unknown,
  status: number = 500,
  message: string = 'Internal Server Error'
): Response => {
  const err = error as ErrorWithMessage;

  if (err.message in ERROR_PATTERN) {
    const errorDetail = ERROR_PATTERN[err.message as keyof typeof ERROR_PATTERN];
    return res.status(errorDetail.status).json({ error: err.message, message: errorDetail.message });
  }

  return res.status(status).json({ error: message, message: err.message });
};
