const { StatusCodes } = require('http-status-codes');
const Models = require('../../models/recipes');
const { INVALID_ENTRIES } = require('../../utils/errorSet');
const { recipeValidation } = require('./validations');

module.exports = async (user, recipe) => {
  if (recipeValidation(recipe).error) {
    return INVALID_ENTRIES;
  }
  
  const { _id: userId } = user;

  const newRecipe = (await Models.create({ ...recipe, userId })).ops[0];

  return { status: StatusCodes.CREATED, message: newRecipe };
};
