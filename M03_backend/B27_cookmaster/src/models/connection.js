const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/Cookmaster`;
const DB_NAME = 'Cookmaster';
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let connection = null;

module.exports = async () => {
  try {
    if (connection) return connection;
    connection = (await MongoClient.connect(MONGO_DB_URL, OPTIONS)).db(DB_NAME);
    return connection;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
