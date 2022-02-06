import Joi from 'joi';

const createUser = Joi.object({
    name: Joi.string().required(),
    username: Joi.string().min(3).max(100).required(),
    password: Joi.string().min(3).max(100).required(),
    password_confirmation: Joi.string().required(),
});

export {
    createUser,
};
