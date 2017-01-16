import express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.send({ hi: 'there' });
});

export default app;
