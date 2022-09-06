const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (collection, entity) => {
  const db = await connection();
  const { id, ...entityWithoutId } = entity;

  if (collection === 'sales') {
    return db.collection(collection).updateOne(
      { _id: ObjectId(id) },
      {
        $set: { itensSold: entityWithoutId.sale },
      },
    );
  }

  return db.collection(collection).updateOne(
    { _id: ObjectId(id) },
    {
      $set: entityWithoutId.product,
    },
  );
};
