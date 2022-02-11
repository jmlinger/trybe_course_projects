const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');
const { INVALID_ENTRIES, CATEGORIES_NOT_FOUND } = require('../../utils/errorSet');
const { postValidation } = require('./validations');

module.exports = async (post, userId) => {
  const validationError = postValidation(post);
  
  if (validationError !== null) {
    return INVALID_ENTRIES(validationError.message);
  }
  
  const { categoryIds } = post;
  const findCategoriesById = await Models.Categorie.findAll({ where: { id: categoryIds } });
  
  if (findCategoriesById.length < categoryIds.length) {
    return CATEGORIES_NOT_FOUND;
  }
  
  const newPost = await Models.BlogPost.create({ ...post, userId });
  
  const { id: postId } = newPost;
  categoryIds.forEach((categoryId) => Models.PostsCategories.create({ postId, categoryId }));

  return { status: StatusCodes.CREATED, message: newPost };
};
