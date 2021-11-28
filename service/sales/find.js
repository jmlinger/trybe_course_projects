const Products = require('../../model/entity')('sales');

module.exports = async () => {
  const getAll = await Products.find();
  
  return getAll;
};
