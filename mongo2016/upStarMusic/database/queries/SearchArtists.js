import Artist from '../models/artist';

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 */

export default (criteria, sortProperty, offset = 0, limit = 20) => {
  // es5
  // const sortOrder = {};
  // sortOrder[sortProperty] = 1;
  // Artist.find({})
  //   .sort(sortOrder);

  // es6
  const query = Artist.find({})
    .sort({ [sortProperty]: 1 })
    .skip(offset)
    .limit(limit);

  return Promise.all([query, Artist.count()])
    .then((results) => {
      return { all: results[0], count: results[1], offset, limit };
    });
};
