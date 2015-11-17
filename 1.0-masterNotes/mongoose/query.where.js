/**
 * refer to slides
 *
 * Model.where(path, [val])
 */
var Customer = require('../models/customer');

Customer.find({ discount: {$gte: 10, $lt: 20}, function (err, results) {
  if (err) throw err;
  console.log(results);
}});

// path is the name of the document field we are quering against 'discount'
Customer.where('discount').gte(10).lt(20).exec(function (err, results) {
  if (err) throw err;
  console.log(results);
});

// chain where methods together
Customer.where('discount').gte(10).lt(20)
        .where('zipCode', '90210')
        .exec(function (err, results) {
          if (err) throw err;
          console.log(results);
        });
