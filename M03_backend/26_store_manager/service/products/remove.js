const findById = require('./findById');
const Product = require('../../model/entity')('products');

module.exports = async (id) => {
  const productRemoved = await findById(id);

  await Product.remove(id);

  return productRemoved;
};
