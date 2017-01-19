import Driver from '../models';

export default {
  greeting(req, res) {
    res.send({ hi: 'there' });
  },

  create(req, res, next) {
    // shows email of driver object we are trying to create
    // console.log(req.body); // eslint-disable-line
    const driverProps = req.body;

    Driver.create(driverProps)
      .then(driver => res.send(driver))
      .catch(next);
  },

  edit(req, res, next) {
    const driverId = req.params.id;
    const driverProps = req.body;

    Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
      .then(() => Driver.findById({ _id: driverId }))
      .then(driver => res.send(driver))
      .catch(next);
  }
};
