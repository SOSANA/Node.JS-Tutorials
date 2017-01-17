import Artist from '../models/artist';

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 *
 * Partial text search:
 * - That looks like a good solution to me, except you probably want the .where()
 *   clauses before .skip()  and .limit() if you want each page to have the same
 *   number of entries.
 *
 * - The results are being filtered by MongoDB, so you won't be getting a larger
 *   result set than you need, which is good.
 *
 * - The way presented in the video lets MongoDB presumably filter in O(log n)
 *   time because the name column has an index. In your way, MongoDB will have to
 *   look at each document and compare it to the regex, which is O(n). So that is
 *   the only con I can think of. It depends on what is more important to your
 *   application. You'll also need a different solution for the correct count in lecture 95
 */

const buildQuery = (criteria, sortProperty) => {
  let query = Artist
    .find({})
    .sort({ [sortProperty]: 1 });

  if (criteria.name) {
    query = query
      .where('name')
      .equals(new RegExp(criteria.name, 'i'));
  }

  if (criteria.age) {
    query = query
      .where('age')
      .gte(criteria.age.min)
      .lte(criteria.age.max);
  }

  if (criteria.yearsActive) {
    query = query
     .where('yearsActive')
     .gte(criteria.yearsActive.min)
     .lte(criteria.yearsActive.max);
  }

  return query;
};

export default (criteria, sortProperty, offset = 0, limit = 20) => {
  const all = buildQuery(criteria, sortProperty)
    .skip(offset)
    .limit(limit);

  const count = buildQuery(criteria, sortProperty)
    .count();

  return Promise.all([all, count])
    .then((results) => {
      return {
        all: results[0],
        count: results[1],
        offset,
        limit
      };
    });
};
