import Joi from 'joi';

const createUserValidation = Joi.object({
    name: Joi.string().required(),
    username: Joi.string().min(3).max(100).required(),
    password: Joi.string().min(3).max(100).required(),
    password_confirmation: Joi.string().required(),
});

const authenticateUserValidation = Joi.object({
    username: Joi.string().min(3).max(100).required(),
    password: Joi.string().min(3).max(100).required(),
});

export {
    createUserValidation,
    authenticateUserValidation,
};
