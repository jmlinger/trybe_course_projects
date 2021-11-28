const { ObjectId } = require('mongodb');
const { notFound } = require('../../utils/setOfErrors');
const Products = require('../../model/entity')('sales');

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) {
    throw notFound();
  }

  const productById = await Products.findById(id);

  if (!productById) {
    throw notFound();
  }

  return productById;
};
