import Artist from '../models/artist';

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */

export default () => {
  const minQuery = Artist
    .find({})
    .sort({ yearsActive: 1 }) // accending order
    .limit(1) // limit result to one
    .then(artists => artists[0].yearsActive); // grab first one in the array

  const maxQuery = Artist
    .find({})
    .sort({ yearsActive: -1 }) // deccending order
    .limit(1) // limit result to one
    .then(artists => artists[0].yearsActive); // grab first one in the array

  return Promise.all([minQuery, maxQuery])
    .then((result) => {
      return { min: result[0], max: result[1] }; // grabbing first result and second result from array
    });
};

// after we could use it with an elequent query by invoking it, ex:
// GetAgeRange()
//   .then((argument) => {
//     console.log(argument);
//   });
