import { User } from "./app/User"

export const getTables = () => {
    const app: any = [User]
    const general: any = []
    const admin: any = []

    return [...app, ...general, ...admin]
}