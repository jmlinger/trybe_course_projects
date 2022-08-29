const Joi = require('joi');

const quantitySchema = Joi.object({
  quantity: Joi.number().integer().min(1).required(),
});

// console.log(quantitySchema.validate({ quantity: 0 }).error.details[0].message);
// console.log(productValidation({ name: 'aliaa', quantity: '' }).error);

module.exports = {
  quantityValidation: (quantity) => quantitySchema.validate({ quantity }),
};