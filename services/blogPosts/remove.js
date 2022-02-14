const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');
const { POST_NOT_EXIST, UNAUTHORIZED_USER } = require('../../utils/errorSet');

module.exports = async (postId, userId) => {  
  const postById = await Models.BlogPosts.findByPk(postId);

  if (!postById) {
    return POST_NOT_EXIST;
  }

  if (postById.userId !== userId) {
    return UNAUTHORIZED_USER;
  }

  await Models.BlogPosts.destroy({ where: { id: postId } });

  return { status: StatusCodes.NO_CONTENT };
};
