import Artist from '../models/artist';

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */

export default () => {
  const minQuery = Artist
    .find({})
    .sort({ age: 1 }) // accending order
    .limit(1) // limit result to one
    .then(artists => artists[0].age); // grab first one in the array

  const maxQuery = Artist
    .find({})
    .sort({ age: -1 }) // deccending order
    .limit(1) // limit result to one
    .then(artists => artists[0].age); // grab first one in the array

  return Promise.all([minQuery, maxQuery])
    .then((result) => {
      return { min: result[0], max: result[1] }; // grabbing first result and second result from array
    });
};
