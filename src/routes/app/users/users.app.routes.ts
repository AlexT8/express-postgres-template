import { Router } from "express";
import { createAppUser, getAppUser } from "./users.app.service";

const user_app_routes = Router()

user_app_routes.get('', getAppUser)
user_app_routes.post('', createAppUser)

export default user_app_routes