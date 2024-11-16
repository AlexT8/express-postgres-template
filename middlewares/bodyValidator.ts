import { Request, Response, NextFunction } from "express";
import { InvalidDataException } from "@/utilities/http/exceptions";
import { validationResult } from "express-validator";

export const bodyValidator = (req:Request, res:Response, next:NextFunction) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) throw new InvalidDataException('Faltan datos', errors.array())

    } catch (err:any) {
        next(err)
    }

  return next();
};

export const formatBody = (req:Request, res:Response, next:NextFunction) => {

    const data = JSON.parse(req.body.data)
    req.body = {...req.body, ...data}

    return next();
};