import express from 'express';

import { mainRouter } from './routes/main.js';

const PORT = 3000;

const app = express();
app.use(express.json());

//Routes
app.use('/', mainRouter);

//server - start/listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});