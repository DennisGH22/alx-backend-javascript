import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  req.databasePath = req.query.database || 'database.csv';
  next();
});

app.use('/', routes);

const port = 1245;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;
