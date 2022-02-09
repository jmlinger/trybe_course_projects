const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');
const { INVALID_ENTRIES } = require('../../utils/errorSet');
const { categorieValidation } = require('./validations');

module.exports = async (category) => {
  const validationError = categorieValidation(category);
  
  if (validationError) {
    return INVALID_ENTRIES(validationError.message);
  }
  
  const newCategorie = (await Models.Categorie.create(category)).dataValues;

  return { status: StatusCodes.CREATED, message: newCategorie };
};
