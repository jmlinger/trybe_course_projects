const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.required(),
});

// console.log(userSchema.validate({ displayName: 'aliaa', email: 'aa@aa.com', password: '123456', image: '' }).error.details[0].message);

const validationError = (post) => postSchema.validate(post).error;

module.exports = {
  postValidation: (post) =>
    (validationError(post) ? validationError(post).details[0] : null),
};