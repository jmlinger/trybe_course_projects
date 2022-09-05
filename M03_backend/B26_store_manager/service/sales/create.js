const { ObjectId } = require('mongodb');
const { invalidData, invalidId } = require('../../utils/setOfErrors');
const { quantityValidation } = require('./validations');
const Sales = require('../../model/entity')('sales');

module.exports = async (sales) => {
  sales.forEach((sale) => {
    const { productId, quantity } = sale;
    
    if (!ObjectId.isValid(productId)) {
      throw invalidId();
    }
    const { error } = quantityValidation(quantity);
  
    if (error) {
      throw invalidData('Wrong product ID or invalid quantity');
    }
  });
  const newProduct = (await Sales.create(sales)).ops[0];
  return newProduct;
};
