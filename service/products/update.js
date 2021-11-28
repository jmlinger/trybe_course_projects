const Product = require('../../model/entity')('products');
const { invalidData } = require('../../utils/setOfErrors');
const findById = require('./findById');
const { productValidation } = require('./validations');

module.exports = async (id, product) => {
  const { error } = productValidation(product);
  
  if (error) {
    throw invalidData(error);
  }

  await Product.update({ id, product });

  const updatedProduct = findById(id);

  return updatedProduct;
};
