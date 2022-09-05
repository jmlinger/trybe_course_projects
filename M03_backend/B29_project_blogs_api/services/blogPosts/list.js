const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');

module.exports = async () => {
  const postsList = await Models.BlogPosts.findAll({
    include: [
      { model: Models.Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Models.Categories, as: 'categories' },
    ],
  });

  return { status: StatusCodes.OK, message: postsList };
};
