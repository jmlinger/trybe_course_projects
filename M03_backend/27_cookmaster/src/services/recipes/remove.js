const { ObjectId } = require('mongodb');
const { StatusCodes } = require('http-status-codes');
const Models = require('../../models/recipes');
const { RECIPE_NOT_FOUND, DONT_OWN_RECIPE } = require('../../utils/errorSet');

module.exports = async (user, id) => {
  if (!ObjectId.isValid(id)) {
    return RECIPE_NOT_FOUND;
  }

  const matchedRecipe = await Models.findById(id);

  if (!matchedRecipe) {
    return RECIPE_NOT_FOUND;
  }

  const { _id, role } = user;

  if (matchedRecipe.userId !== _id && role === 'user') {
    return DONT_OWN_RECIPE;
  }
  await Models.remove(id);

  return { status: StatusCodes.NO_CONTENT };
};
