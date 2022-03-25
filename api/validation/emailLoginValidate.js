const Joi = require('joi');

const userRegistrationValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().max(64).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(4).required()
    });
    return schema.validate(data);
};

const userLoginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(4).required()
    });
    return schema.validate(data);
};

module.exports = { userRegistrationValidation, userLoginValidation }