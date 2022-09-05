const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// console.log(loginSchema.validate({ displayName: 'aliaa', email: 'aa@aa.com', password: '123456', image: '' }).error.details[0].message);

const validationError = (user) => loginSchema.validate(user).error;

module.exports = {
  loginValidation: (user) =>
    (validationError(user) ? validationError(user).details[0] : null),
};