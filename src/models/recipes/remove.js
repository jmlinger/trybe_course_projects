const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  const db = await connection();
  const updatedRecipe = db.collection('recipes').removeOne({ _id: ObjectId(id) });

  return updatedRecipe;
};
