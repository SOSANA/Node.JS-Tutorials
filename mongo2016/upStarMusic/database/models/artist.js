// Todo: Create Artist Model
import mongoose from 'mongoose';
import AlbumSchema from './album';

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  yearsActive: { type: Number },
  image: { type: String },
  genre: { type: String },
  website: { type: String },
  netWorth: { type: Number },
  labelName: { type: String },
  retired: { type: Boolean },
  albums: [AlbumSchema]
});

const Artist = mongoose.model('artist', ArtistSchema);

export default Artist;
