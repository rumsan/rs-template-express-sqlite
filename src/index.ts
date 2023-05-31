import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import { PORT } from './config';
import DB from './utils/database';
import config from './config';

const app = express();

// Parse JSON bodies
app.use(bodyParser.json());

// Routes
app.use('/', routes);

// Default route handler
app.use('/', (req: Request, res: Response) => {
  res.status(404).send('Not Found');
});

// Start the server
DB.sync()
  .then(async () => {
    await config.load();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
