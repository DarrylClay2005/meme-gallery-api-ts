import Joi from 'joi';

export const memeSchema = Joi.object({
  title: Joi.string().min(1).required(),
  url: Joi.string().uri().required(),
});
