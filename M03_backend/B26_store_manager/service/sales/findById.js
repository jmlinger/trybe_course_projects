const { ObjectId } = require('mongodb');
const { notFound } = require('../../utils/setOfErrors');
const Sales = require('../../model/entity')('sales');

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) {
    throw notFound();
  }

  const saleById = await Sales.findById(id);

  if (!saleById) {
    throw notFound();
  }

  return saleById;
};
