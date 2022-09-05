const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (recipe) => {
  const { id, ...recipeWithoutId } = recipe;
  const db = await connection();
  const updatedRecipe = db.collection('recipes').updateOne(
    { _id: ObjectId(id) },
    {
      $set: recipeWithoutId,
    },
  );

  return updatedRecipe;
};
