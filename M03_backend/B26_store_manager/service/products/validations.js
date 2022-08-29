const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().min(5).required(),
  quantity: Joi.number().integer().min(1).required(),
});

// console.log(productSchema.validate({ name: 'aliaa', quantity: '' }).error.details[0].message);
// console.log(productValidation({ name: 'aliaa', quantity: '' }).error);

module.exports = {
  productValidation: (product) => productSchema.validate(product),
};