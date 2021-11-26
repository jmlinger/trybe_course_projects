const { invalidData } = require('../../utils/setOfErrors');
const { productValidation } = require('./validations');
const Products = require('../../model/entity')('products');
const find = require('./find');

module.exports = async (product) => {
  const { error } = productValidation(product);

  if (error) {
    throw invalidData(error);
  }

  if ((await find(product)).length > 0) {
    throw invalidData(Error('Product already exists'));
  }

  const newProduct = (await Products.create(product)).ops[0];
  return newProduct; // ops chave que contem um array com um obj que contem a alteração resultante no db.
};
