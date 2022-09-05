const Models = require('../../models/users');

module.exports = async (filters) => {
  const filteredUsers = await Models.find(filters);
  return filteredUsers;
};
