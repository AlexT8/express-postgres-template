import { getResponse } from "@/utilities/http/responses";
import { Request, Response, Router } from "express";
import webhook_routes from "./webhooks/index.webhook";

const routes = Router()

routes.get('/', (_req: Request, res: Response) => {
    getResponse(res, 'Api running')
})

routes.use('/webhook', webhook_routes)

export default routes