import dotenv from 'dotenv';
import express from 'express';
import signal from './signal.js';
async function serve() {
    dotenv.config();
    const PORT = process.env.PORT || 3600;
    const app = express();
    app.get('/', (req, res) => res.sendStatus(200));
    const server = app.listen(PORT, () => console.log('Server running on ', `http://localhost:${PORT}`));
    signal(server);
}
serve();
