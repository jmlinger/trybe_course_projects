const { readJSON, writeJSON } = require('../utilities/JSONHandler');

const talkersJSON = './talker.json';

const readAll = async (_req, res) => {
  const talkers = await readJSON(talkersJSON);
  return res.status(200).json(talkers);
};

const readById = async (req, res, _next) => {
  const { id } = req.params;
  const talkers = await readJSON(talkersJSON);
  const talkerById = talkers.find((talker) => talker.id === Number(id)); // o id vem da url como string!
  
  return res.status(200).json(talkerById);
};

/** @type { import('express').RequestHandler } */

const addTalker = async (req, res, _next) => {
  const { name, age, talk } = req.body;
  
  let talkers = await readJSON(talkersJSON);
  const newTalker = {
    id: talkers.length + 1,
    name,
    age,
    talk,
  };

  talkers = [...talkers, newTalker];
  await writeJSON(talkersJSON, talkers);

  res.status(201).json(newTalker);
};

module.exports = { readAll, readById, addTalker };
