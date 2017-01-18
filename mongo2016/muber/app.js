import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV === 'development') {
  mongoose.connect('mongodb://localhost/muber');
}

app.use(bodyParser.json());

routes(app);

app.listen(3050, () => { // eslint-disable-line
  console.log('Running on port: 3050'); // eslint-disable-line
});

export default app;
