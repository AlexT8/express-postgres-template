import { createResponse, getResponse } from "@/utilities/http/responses"
import { Request, Response, NextFunction  } from "express"

//#region Create
export const createAppUser = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email } = req.body

        // Register user

        createResponse(res, 'Usuario creado')
    } catch (error) {
        next(error)
    }
}

//#region Get
export const getAppUser = (req: Request, res: Response, next: NextFunction) => {
    try {
        // Get user

        getResponse(res, 'Usuario obtenido')
    } catch (error) {
        next(error)
    }
}