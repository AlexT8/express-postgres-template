import {Express} from 'express'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'

export const setHeaders = (app: Express) => {
    app.use(helmet())
    app.use(bodyParser.json({ limit: '10mb' })) // Parse every request with JSON
    app.use(bodyParser.urlencoded({ limit: '10mb', extended: true })) // Parse every request with JSON
    app.use(compression()) // Compress every HTTP request
}
  
export const initializeAppSettings = (app: Express, express: typeof import('express')) => {
    setHeaders(app);
}