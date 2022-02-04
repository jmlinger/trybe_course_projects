const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
  image: Joi.required(),
});

// console.log(userSchema.validate({ displayName: 'aliaa', email: 'aa@aa.com', password: '123456', image: '' }).error.details[0].message);

const validationError = (user) => userSchema.validate(user).error;

module.exports = {
  userValidation: (user) =>
    (validationError(user) ? validationError(user).details[0] : null),
};
