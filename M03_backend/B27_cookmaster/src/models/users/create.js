const connection = require('../connection');

module.exports = async (entity) => {
  const db = await connection();
  const newUser = await db.collection('users').insertOne({ ...entity, role: 'user' });

  return newUser;
};
