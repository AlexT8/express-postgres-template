import { Router } from "express";
import github_webhook_routes from './github.webhook'

const webhook_routes = Router()

webhook_routes.use('/github', github_webhook_routes)

export default webhook_routes