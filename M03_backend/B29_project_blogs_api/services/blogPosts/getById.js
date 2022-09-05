const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');
const { POST_NOT_EXIST } = require('../../utils/errorSet');

module.exports = async (id) => {
  // Referência: a query foi extraida do repositório do colega Amós Rodrigues, turma 13 - tribo c. Repositório: https://github.com/tryber/sd-013-c-project-blogs-api/pull/35.
  const postById = await Models.BlogPosts.findOne({
    where: { id },
    include: [
      { model: Models.Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Models.Categories, as: 'categories' },
    ],
  });

  if (!postById) {
    return POST_NOT_EXIST;
  }

  return { status: StatusCodes.OK, message: postById };
};
