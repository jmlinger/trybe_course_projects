const connection = require('../connection');

module.exports = async (collection, entity) => {
  const db = await connection();

  if (collection === 'sales') {
    return db.collection(collection).insertMany([{ itensSold: entity }]);
  }

  return db.collection(collection).insertOne(entity);
};

console.log();