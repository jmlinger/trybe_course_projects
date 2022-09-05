const connection = require('../connection');

module.exports = async (collection, filters) => {
  const db = await connection();
  return db.collection(collection).find(filters).toArray();
};
