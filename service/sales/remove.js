const { ObjectId } = require('mongodb');
const { invalidData } = require('../../utils/setOfErrors');
const Sales = require('../../model/entity')('sales');

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) {
    throw invalidData('Wrong sale ID format');
  }

  const saleRemoved = await Sales.findById(id);

  if (!saleRemoved) {
    throw invalidData('Wrong sale ID format');
  }

  await Sales.remove(id);

  return saleRemoved;
};
