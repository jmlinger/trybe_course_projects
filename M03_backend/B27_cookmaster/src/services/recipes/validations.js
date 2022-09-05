const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().required(),
  ingredients: Joi.string().required(),
  preparation: Joi.string().required(),
});

module.exports = {
  recipeValidation: (recipe) => userSchema.validate(recipe),
};
