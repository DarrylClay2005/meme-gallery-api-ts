import express from 'express';
import memesRouter from './routes/memes.js';
import { mockAuth } from './middleware/mockAuth.js';

const app = express();

app.use(express.json());
app.use(mockAuth);

app.use('/memes', memesRouter);

app.get('/', (_req, res) => res.json({ ok: true }));

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const message = err.message || 'Internal Server Error';
  const status = message.toLowerCase().includes('invalid') ? 400 : 500;
  res.status(status).json({ error: message });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
