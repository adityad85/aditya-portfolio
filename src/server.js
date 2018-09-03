import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'It\'s Up' });
});

export default app;
