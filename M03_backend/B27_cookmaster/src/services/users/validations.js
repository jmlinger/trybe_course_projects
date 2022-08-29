const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

// console.log(userSchema.validate({ name: 'aliaa', email: 'aa@aa.com', password: '' }).error);

module.exports = {
  userValidation: (user) => userSchema.validate(user),
};
