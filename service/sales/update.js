const Product = require('../../model/entity')('products');
const { invalidData } = require('../../utils/setOfErrors');
const findById = require('./findById');
const { productValidation } = require('./validations');

module.exports = async (id, product) => {
  await Product.update({ id, ...product });

  const { error } = productValidation(product);

  if (error) {
    throw invalidData(error);
  }

  const updatedProduct = findById(id);

  return updatedProduct;
};
