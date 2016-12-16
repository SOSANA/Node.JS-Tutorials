import Artist from '../models/artist';

/**
 * Deletes a single artist from the Artists collection
 * @param {string} _id - The ID of the artist to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */

export default (_id) => {
  // console.log(`Removed id: ${_id}`);
  // return Artist.remove({ _id }); // another possible solution
  return Artist.findByIdAndRemove({ _id });
};
