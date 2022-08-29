const { ObjectId } = require('mongodb');
const { StatusCodes } = require('http-status-codes');
const Models = require('../../models/recipes');
const { RECIPE_NOT_FOUND } = require('../../utils/errorSet');

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) {
    return RECIPE_NOT_FOUND;
  }

  const recipeById = await Models.findById(id);

  if (!recipeById) {
    return RECIPE_NOT_FOUND;
  }

  return { status: StatusCodes.OK, message: recipeById };
};
