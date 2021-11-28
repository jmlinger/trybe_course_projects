const { ObjectId } = require('mongodb');
const Sales = require('../../model/entity')('sales');
const { invalidData, invalidId } = require('../../utils/setOfErrors');
const findById = require('./findById');
const { quantityValidation } = require('./validations');

module.exports = async (id, sale) => {
  const { productId, quantity } = sale[0];

  if (!ObjectId.isValid(productId) || !ObjectId.isValid(id)) {
    throw invalidId();
  }
  
  const { error } = quantityValidation(quantity);
  
  if (error) {
    throw invalidData('Wrong product ID or invalid quantity');
  }
  console.log(sale);
  await Sales.update({ id, sale });
  
  const updatedSale = await findById(id);

  return updatedSale;
};
