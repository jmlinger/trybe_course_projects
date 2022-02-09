const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');
const { INVALID_ENTRIES, CATEGORIES_NOT_FOUND } = require('../../utils/errorSet');
const { postValidation } = require('./validations');

module.exports = async (post, userId) => {
  const validationError = postValidation(post);

  if (validationError) {
    return INVALID_ENTRIES(validationError.message);
  }

  const findCategoriesById = await Models.Categorie.findAll({ where: { id: post.categoryIds } });

  if (findCategoriesById.length < post.categoryIds.length) {
    return CATEGORIES_NOT_FOUND;
  }
  
  const newPost = (await Models.BlogPost.create({ ...post, userId })).dataValues;

  return { status: StatusCodes.CREATED, message: newPost };
};
