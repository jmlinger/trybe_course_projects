const { StatusCodes } = require('http-status-codes');
const Models = require('../../models');
const { USER_NOT_EXIST } = require('../../utils/errorSet');

module.exports = async (id) => {  
  const userById = await Models.User.findOne({ where: { id } });

  if (!userById) {
    return USER_NOT_EXIST;
  }

  return { status: StatusCodes.OK, message: userById };
};
