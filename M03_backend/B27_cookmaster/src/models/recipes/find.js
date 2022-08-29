const connection = require('../connection');

module.exports = async (filters) => {
  const db = await connection();
  return db.collection('recipes').find(filters).toArray();
};
