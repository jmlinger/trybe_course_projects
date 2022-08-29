const Products = require('../../model/entity')('products');

module.exports = async (filters) => {
  const getAll = await Products.find();
  
  if (filters) {
    const { name } = filters;
    const filteredByName = getAll
      .filter((product) => product.name.toUpperCase() === name.toUpperCase());
    return filteredByName;
  }

  return getAll;
};
