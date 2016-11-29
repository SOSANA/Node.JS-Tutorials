// const mongoose = require('mongoose');
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost/mongo2016_users_test');
mongoose.connection
  .once('open', () => { console.log('Good to go!'); })
  .on('error', (error) => {
    console.warn('Error', error);
  });
