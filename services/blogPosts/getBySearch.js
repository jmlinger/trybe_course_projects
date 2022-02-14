const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');
const Models = require('../../models');

module.exports = async (q) => {
  if (!q) {
    const postsList = await Models.BlogPosts.findAll({
      include: [
        { model: Models.Users, as: 'user', attributes: { exclude: ['password'] } },
        { model: Models.Categories, as: 'categories' }] });

    return { status: StatusCodes.OK, message: postsList };
  }

  // Referência: a query foi desenvolvida e explicada pela colega Natalia de Souza Ribeiro, turma 13 - tribo c. Repositório: https://github.com/tryber/sd-013-c-project-blogs-api/pull/14.
  const postBySearch = await Models.BlogPosts.findAll({
    where: { [Op.or]: [
      { title: { [Op.like]: `%${q}%` } },
      { content: { [Op.like]: `%${q}%` } },
    ] },
    include: [
      { model: Models.Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Models.Categories, as: 'categories', through: { attributes: [] } }] });

  return { status: StatusCodes.OK, message: postBySearch };
};
