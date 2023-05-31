import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';

const validators: { [key: string]: Joi.ObjectSchema } = {
  set: Joi.object({
    name: Joi.string().required(),
    value: Joi.string().required(),
  }),
};

export const validate = (validator: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = validators[validator].validate(req.body); // Use bracket notation to access the specified validator
    if (error) return res.status(400).send(error.details[0]);
    next();
  };
};
