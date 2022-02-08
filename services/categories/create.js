const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');
const { INVALID_ENTRIES } = require('../../utils/errorSet');
const { categorieValidation } = require('./validations');

module.exports = async (categorie) => {
  console.log(categorie);
  const validationError = categorieValidation(categorie);
  
  if (validationError) {
    return INVALID_ENTRIES(validationError.message);
  }
  
  const newCategorie = (await Models.Categorie.create(categorie)).dataValues;

  return { status: StatusCodes.CREATED, message: newCategorie };
};
