import express from 'express';
import Routes from './app/routes/routes';

const app = express();
const PORT = 8000;

app.use(Routes)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});