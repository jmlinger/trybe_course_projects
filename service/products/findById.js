const { ObjectId } = require('mongodb');
const { invalidData } = require('../../utils/setOfErrors');

const Products = require('../../model/entity')('products');

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) {
    throw invalidData(Error('Wrong id format'));
  }

  const productById = await Products.findById(id);

  if (!productById) {
    throw invalidData(Error('Wrong id format'));
  }

  return productById;
};
