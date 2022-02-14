const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');
const { INVALID_ENTRIES, CATEGORY_ALREADY_REGISTERED } = require('../../utils/errorSet');
const { categorieValidation } = require('./validations');

module.exports = async (category) => {
  const validationError = categorieValidation(category);
  
  if (validationError) {
    return INVALID_ENTRIES(validationError.message);
  }

  const categoryByName = await Models.Categories.findOne({ where: { name: category.name } });

  if (categoryByName) {
    return CATEGORY_ALREADY_REGISTERED;
  }

  const newCategorie = await Models.Categories.create(category);

  return { status: StatusCodes.CREATED, message: newCategorie };
};
