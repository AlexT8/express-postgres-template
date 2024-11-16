import { getResponse } from "@/utilities/http/responses";
import { Request, Response, Router } from "express";
import webhook_routes from "./webhooks/index.webhook";
import app_routes from "./app";

const routes = Router()

routes.get('/', (_req: Request, res: Response) => {
    getResponse(res, 'Api running')
})

routes.use('/app', app_routes)
routes.use('/webhook', webhook_routes)

export default routes