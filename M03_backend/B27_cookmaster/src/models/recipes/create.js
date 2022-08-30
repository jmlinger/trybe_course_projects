const connection = require('../connection');

module.exports = async (entity) => {
  const db = await connection();
  const newRecipe = await db.collection('recipes').insertOne(entity);

  return newRecipe;
};
