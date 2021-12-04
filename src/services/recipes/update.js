const { ObjectId } = require('mongodb');
const { StatusCodes } = require('http-status-codes');
const Models = require('../../models/recipes');
const { RECIPE_NOT_FOUND, INVALID_ENTRIES, DONT_OWN_RECIPE } = require('../../utils/errorSet');
const { recipeValidation } = require('./validations');

const idAndRecipeValidations = (id, recipe) => {
  if (!ObjectId.isValid(id)) {
    return RECIPE_NOT_FOUND;
  }

  if (recipeValidation(recipe).error) {
    return INVALID_ENTRIES;
  }
};

module.exports = async (user, id, recipe) => {
  idAndRecipeValidations(id, recipe);

  const matchedRecipe = await Models.findById(id);

  if (!matchedRecipe) {
    return RECIPE_NOT_FOUND;
  }

  const { _id, role } = user;

  if (matchedRecipe.userId !== _id && role === 'user') {
    return DONT_OWN_RECIPE;
  }
  await Models.update({ id, ...recipe });

  const updatedRecipe = await Models.findById(id);

  return { status: StatusCodes.OK, message: updatedRecipe };
};
