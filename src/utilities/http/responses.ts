import { Response } from "express";

export const getResponse = (res: Response, message: string, data?: any) => {
    return res.status(200).json({
        message,
        ...data
    })
}