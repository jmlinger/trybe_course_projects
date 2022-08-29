const fs = require('fs/promises');

const readJSON = async (file) => {
  const readFile = await fs.readFile(file, 'utf-8');
  return JSON.parse(readFile);
};

const writeJSON = async (file, data) => fs.writeFile(file, JSON.stringify(data));

module.exports = { readJSON, writeJSON };
