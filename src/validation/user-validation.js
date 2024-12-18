import Joi from "joi";

const registerUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
  name: Joi.string().max(100).required(),
});

const loginUserValidaton = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
});

export { registerUserValidation, loginUserValidation };
