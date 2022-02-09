const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');

module.exports = async () => {
  const postsList = await Models.BlogPost.findAll({
    include: [
      { model: Models.User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Models.Categorie, as: 'categories' },
    ],
  });

  return { status: StatusCodes.OK, message: postsList };
};
