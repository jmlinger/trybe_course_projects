const connection = require('../connection');

module.exports = async (collection, entity) => {
  const db = await connection();
  return db.collection(collection).insertOne(entity);
};
