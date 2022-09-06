const { ObjectId } = require('mongodb');
const { invalidId } = require('../../utils/setOfErrors');
const Products = require('../../model/entity')('products');

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) {
    throw invalidId();
  }

  const productById = await Products.findById(id);

  if (!productById) {
    throw invalidId();
  }

  return productById;
};
