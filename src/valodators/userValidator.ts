import Joi from "joi";

const userValidator =
    Joi.object({
        name: Joi.string()
            .min(3)
            .max(15)
            .messages({
                'string.empty':'can not be empty',
                'string.min' : 'must be lower than 3',
                'string.max' : 'can not be lower than 15'
            }),
        username: Joi.string()
            .min(3)
            .max(20)
            .messages({
                'string.empty' : 'can not be empty',
                'string.min':'must be lower than 3',
                'string.max':'can not  be lower than 30'
            }),
        email:Joi.string()
            .required()
            .email({ tlds: { allow: false }})
    })


export default userValidator;