const connection = require('../connection');

module.exports = async (entity) => {
  const { name, email } = entity;
  const db = await connection();
  return db.collection('users').insertOne({ name, email, role: 'user' });
};
