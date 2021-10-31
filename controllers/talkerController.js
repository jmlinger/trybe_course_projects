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

// /** @type { import('express').RequestHandler } */

const updateTalker = async (req, res, _next) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  
  const talkers = await readJSON(talkersJSON);
  const talkerIndexById = talkers.findIndex((talker) => talker.id === Number(id));
  talkers[talkerIndexById] = { ...talkers[talkerIndexById], name, age, talk };
  await writeJSON(talkersJSON, talkers);

  res.status(200).json(talkers[talkerIndexById]);
};

module.exports = { readAll, readById, addTalker, updateTalker };
