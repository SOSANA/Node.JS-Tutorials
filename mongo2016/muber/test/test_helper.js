import mongoose from 'mongoose';

before((done) => {
  mongoose.connect('mongodb://localhost/muber_test');
  mongoose.connection
    .once('open', () => done())
    .on('error', (error) => {
      console.warn('Warning', error); // eslint-disable-line
    });
});

beforeEach((done) => {
  const { drivers } = mongoose.connection.collections;
  drivers.drop()
    // makes sures before any of the tests are ran that a index is in place
    // over the 'geometry.coordinates' property on the drivers collection
    .then(() => drivers.ensureIndex({ 'geometry.coordinates': '2dsphere' }))
    .then(() => done())
    .catch(() => done());
});
