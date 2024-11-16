import { DatabaseLog, ServerLog } from '@/utilities/logs';
import server from '@/server';
import { config, validateEnvironment } from './config';
import { AppDataSource } from './db';

const port = config.port;

validateEnvironment()

// Database connection
AppDataSource.initialize()
  .then(async () => {
    DatabaseLog('Initialized!')

    server.listen(port, () => {
        ServerLog(`Up on :${port}`);
        ServerLog(`At ${new Date()}`);
    });

})
.catch(err => {
    DatabaseLog('Error during initialization:', err)
})