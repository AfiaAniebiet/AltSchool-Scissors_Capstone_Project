// importing http module
import http from 'http';

import app from './app';
import config from './config/default';
// import { config } from 'dotenv';
import mongodb_connection from './db/database';

const PORT = config.PORT as number;

const server = http.createServer(app);

server.listen(PORT, (): void => {
  mongodb_connection();
  console.log(`server running on http://localhost:${PORT}`);
});
