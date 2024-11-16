import { exec } from 'child_process';
import {Request, Response, Router} from 'express'
import { config } from '@/config';
import { ForbiddenException } from '@/utilities/http/exceptions';
import { getResponse } from '@/utilities/http/responses';

const crypto = require('crypto');

const secret = config.keys.github.webhook_secret

const github_webhook_routes = Router()

github_webhook_routes.get('/', (_req: Request, res: Response) => { getResponse(res, 'Webhook Working!') })

github_webhook_routes.post('/', (req, res) => {

    const signature = `sha1=${crypto
    .createHmac('sha1', secret)
    .update(JSON.stringify(req.body))
    .digest('hex')}`

    const isValidSignature = req.headers['x-hub-signature'] === signature

    if (!isValidSignature) throw new ForbiddenException('Acceso prohibido')

    const payload = req.body
  
    // Verifica que el evento sea un push en la rama main
    if (payload.ref === 'refs/heads/main') {
      console.log('Nuevo push en main, actualizando el servidor...')
      exec('sh ../api.sh', (err, stdout, stderr) => {
        if (err) {
          console.error(`Error ejecutando: ${err.message}`)
          return
        }
        console.log(`Salida del script: ${stdout}`)
        console.error(`Errores del script: ${stderr}`)
      })
    }
  
    getResponse(res, 'Webhook recieved')
});

export default github_webhook_routes