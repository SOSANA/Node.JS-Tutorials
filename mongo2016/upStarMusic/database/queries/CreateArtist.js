import Artist from '../models/artist';

/**
 * Finds a single artist in the artist collection.
 * @param {object} artistProps - Object containing a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves with the Artist that was created
 */

export default (artistProps) => {
  // console.log(artistProps);
  // if you only want to pass certain props from server other pass in everything below
  // const { name, age, yearsActive, genre } = artistProps;
  // const artist = new Artist({ name, age, yearsActive, genre });

  const artist = new Artist(artistProps);

  return artist.save();
};
