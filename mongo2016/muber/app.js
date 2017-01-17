import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

app.use(bodyParser.json());

routes(app);

app.listen(3050, () => { // eslint-disable-line
  console.log('Running on port: 3050'); // eslint-disable-line
});


export default app;
