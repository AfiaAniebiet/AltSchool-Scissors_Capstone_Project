// importing http module
import http from 'http';

import app from './app';
import config from 'config';

// const PORT = process.env.PORT || 8000;
const PORT = config.get('PORT');

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
