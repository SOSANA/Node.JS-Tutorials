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
    .then(() => done())
    .catch(() => done());
});
