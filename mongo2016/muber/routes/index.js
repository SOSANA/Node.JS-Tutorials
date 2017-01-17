import DriversController from '../controllers';

export default (app) => {
  app.get('/api', DriversController.greeting);
  app.post('/api/drivers', DriversController.create);
};
