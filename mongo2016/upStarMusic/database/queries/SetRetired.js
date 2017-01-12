import Artist from '../models/artist';

/**
 * Sets a group of Artists as retired
 * @param {array} _ids - An array of the _id's of of artists to update
 * @return {promise} A promise that resolves after the update
 */

export default (_ids) => {
  return Artist.update(
    { _id: { $in: _ids } },
    { retired: true },
    { multi: true } // check doc's, required for multiple boolean updates
  );
};
