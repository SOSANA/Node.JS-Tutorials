import Driver from '../models';

export default {
  greeting(req, res) {
    res.send({ hi: 'there' });
  },

  index(req, res, next) {
    const { lng, lat } = req.query; // ex: http://google.com?lng=80&lat=20

    Driver.geoNear(
      // parseFloat() (native js function) pulls out the full decimal value
      { type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
      { spherical: true, maxDistance: 200000 } // 200,000 meters or 200 kms
    )
      .then(drivers => res.send(drivers))
      .catch(next);
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
  },

  delete(req, res, next) {
    const driverId = req.params.id;

    Driver.findByIdAndRemove({ _id: driverId })
      .then(driver => res.status(204).send(driver))
      .catch(next);
  }
};
