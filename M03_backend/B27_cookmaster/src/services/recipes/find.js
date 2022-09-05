const { StatusCodes } = require('http-status-codes');
const Models = require('../../models/recipes');

module.exports = async (filters) => {
  const filteredRecipes = await Models.find(filters);
  return { status: StatusCodes.OK, message: filteredRecipes };
};
