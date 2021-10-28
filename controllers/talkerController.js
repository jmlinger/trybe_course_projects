const { readJSON } = require('../utilities/JSONHandlers');

const talkerJSON = './talker.json';

const readAll = async (_req, res) => {
  const talker = await readJSON(talkerJSON);
  return res.status(200).json(talker);
};

module.exports = { readAll };
