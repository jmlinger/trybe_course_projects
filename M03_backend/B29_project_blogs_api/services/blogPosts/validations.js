const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.required(),
});

const validationError = (post) => postSchema.validate(post).error;

const updatePostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.optional(),
});

const validationErrorUpdate = (post) => updatePostSchema.validate(post).error;

module.exports = {
  postValidation: (post) =>
    (validationError(post) ? validationError(post).details[0] : null),
  updatePostValidation: (post) =>
    (validationErrorUpdate(post) ? validationErrorUpdate(post).details[0] : null),
};