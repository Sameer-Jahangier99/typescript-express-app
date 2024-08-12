import Joi from 'joi';

export const resourceSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
});

export const listResourcesSchema = Joi.object({
    name: Joi.string().optional(),
    sort: Joi.string().valid('asc', 'desc').optional(),
    page: Joi.number().integer().min(1).optional(),
    limit: Joi.number().integer().min(1).optional(),
  });