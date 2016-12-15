import Artist from '../models/artist';

/**
 * Finds a single artist in the artist collection.
 * @param {string} _id - The ID of the record to find.
 * @return {promise} A promise that resolves with the Artist that matches the id
 */

export default (_id) => {
  // return Artist.findOne({ _id }); // could use this as alternative
  return Artist.findById({ _id });
};
