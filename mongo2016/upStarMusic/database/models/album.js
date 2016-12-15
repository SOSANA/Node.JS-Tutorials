// Todo: create Album Schema
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: { type: String },
  date: { type: Date, default: Date.now },
  copiesSold: { type: Number },
  numberTracks: { type: Number },
  image: { type: String },
  revenue: { type: Number }
});

export default AlbumSchema;
