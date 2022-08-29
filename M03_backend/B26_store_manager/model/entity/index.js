const find = require('./find');
const findById = require('./findById');
const create = require('./create');
const update = require('./update');
const remove = require('./remove');

module.exports = (collection) => {
  const genericModel = {
    find: (filters) => find(collection, filters),
    findById: (id) => findById(collection, id),
    create: (entity) => create(collection, entity),
    update: (entity) => update(collection, entity),
    remove: (id) => remove(collection, id),
  };

  return genericModel;
};
