import { Router } from "express";
import user_app_routes from "./users/users.app.routes";

const app_routes = Router()

app_routes.use('/users', user_app_routes)

export default app_routes