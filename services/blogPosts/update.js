const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');
const { updatePostValidation } = require('./validations');
const {
  INVALID_ENTRIES,
  POST_NOT_EXIST,
  UNAUTHORIZED_USER,
  CATEGORIES_CANNOT_BE_EDITED,
} = require('../../utils/errorSet');

module.exports = async (post, postId, userId) => {
  const validationError = updatePostValidation(post);
  if (validationError) return INVALID_ENTRIES(validationError.message);

  if (post.categoryIds) return CATEGORIES_CANNOT_BE_EDITED;

  const postById = await Models.BlogPost.findOne({ where: { id: postId } });
  if (!postById) return POST_NOT_EXIST;
  if (postById.userId !== userId) return UNAUTHORIZED_USER;
  
  const { title, content } = post;
  await Models.BlogPost.update({ title, content }, { where: { id: postId } });
  const updatedPost = await Models.BlogPost.findOne({
    where: { id: postId },
    include: [
      { model: Models.User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Models.Categorie, as: 'categories' },
    ],
  });

  return { status: StatusCodes.OK, message: updatedPost };
};
