const Joi = require('joi');

const categorieSchema = Joi.object({
  name: Joi.string().required(),
});

// console.log(userSchema.validate({ displayName: 'aliaa', email: 'aa@aa.com', password: '123456', image: '' }).error.details[0].message);

const validationError = (categorie) => categorieSchema.validate(categorie).error;

module.exports = {
  categorieValidation: (categorie) =>
    (validationError(categorie) ? validationError(categorie).details[0] : null),
};