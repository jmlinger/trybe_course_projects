const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

// console.log(userSchema.validate({ name: 'aliaa', email: 'aa@aa.com', password: '' }).error);

module.exports = {
  loginUserValidation: (user) => userSchema.validate(user),
};
