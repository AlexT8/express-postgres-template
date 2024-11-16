import express from 'express';
import { exceptionHandler } from '@/utilities/http/exceptions';
import { initializeAppSettings } from '@/utilities/http/headers';
import routes from '@/routes';

const server = express();

server.use(express.json());

server.use(routes);

initializeAppSettings(server, express)

server.use(exceptionHandler)

export default server