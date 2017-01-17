require('babel-register');
require('babel-polyfill');
require('./app');

app.listen(3050, () => { // eslint-disable-line
  console.log('Running on port: 3050'); // eslint-disable-line
});
