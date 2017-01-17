import Driver from '../models';

export default {
  greeting(req, res) {
    res.send({ hi: 'there' });
  },

  create(req, res) {
    // shows email of driver object we are trying to create
    // console.log(req.body); // eslint-disable-line
    const driverProps = req.body;

    Driver.create(driverProps)
      .then(driver => res.send(driver));
  }
};
