import { NextFunction, Request, Response } from "express";

export enum ErrorCodes {
    INVALID_DATA = 400,
    INVALID_CREDENTIALS = 401,
    INVALID_PAYMENT = 402,
    FORBIDDEN = 403,
}

class HttpException extends Error {
    statusCode: number;
    message: string;
    data?: any;
    constructor(statusCode: number, message: string, data?: any) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
}

export class InvalidCredentialsException extends HttpException {
    data?: any;
    
    constructor(message: string, data?: any) {
        super(ErrorCodes.INVALID_CREDENTIALS, message, data);
    }
}

export class InvalidDataException extends HttpException {
    data?: any;
    
    constructor(message: string, data?: any) {
        super(ErrorCodes.INVALID_DATA, message, data);
    }
}

export class PaymentException extends HttpException {
    data?: any;
    
    constructor(message: string, data?: any) {
        super(ErrorCodes.INVALID_PAYMENT, message, data);
    }
}

export class ForbiddenException extends HttpException {
    data?: any;
    
    constructor(message: string, data?: any) {
        super(ErrorCodes.FORBIDDEN, message, data);
    }
}

export const exceptionHandler = (error: HttpException, _req: Request, res: Response, _next: NextFunction) => {
    const status = error.statusCode || 500;
    const message = status === 500 ? "Ha ocurrido un error en el servidor." : error.message;
    const data = error.data || [];
    console.error(error);
    res.status(status).json({ message: message, errors: data });
}