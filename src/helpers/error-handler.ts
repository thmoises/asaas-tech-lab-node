import { Response } from 'express';
import { ErrorTypesEnum } from '../enums/error-types-enum';

const ERROR_PATTERN = {
    [ErrorTypesEnum.NOT_FOUND]: { status: 404, message: 'Registro não encontrado.' }
};

interface CustomError extends Error {
    message: string;
}

export const handleError = (
    res: Response,
    error: CustomError,
    status: number = 500,
    message: string = 'Internal Server Error'
): Response => {
    if (error.message in ERROR_PATTERN) {
        const errorDetail = ERROR_PATTERN[error.message as keyof typeof ERROR_PATTERN];
        return res.status(errorDetail.status).json({ error: errorDetail.message, message: error.message });
    }

    return res.status(status).json({ error: message, message: error.message });
};
