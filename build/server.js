import dotenv from 'dotenv';
import express from 'express';
import { graphqlServer } from './graphql.js';
import signal from './signal.js';
async function serve() {
    dotenv.config();
    const PORT = process.env.PORT || 3600;
    const app = express();
    app.use('/', graphqlServer);
    const server = app.listen(PORT, () => console.log('Server running on ', `http://localhost:${PORT}`));
    signal(server);
}
serve();
