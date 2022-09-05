const Sales = require('../../model/entity')('sales');

module.exports = async () => {
  const getAll = await Sales.find();
  
  return getAll;
};
