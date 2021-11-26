const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (collection, entity) => {
  const db = await connection();
  const { _id, ...entityWithoutId } = entity;

  return db.collection(collection).updateOne(
    { _id: ObjectId(_id) },
    {
      $set: entityWithoutId,
    },
  );
};
