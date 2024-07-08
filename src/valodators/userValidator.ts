import Joi from "joi";

const userValidator =
    Joi.object({
        name: Joi.string()
            .min(3)
            .max(15)
            .error(errors => {
                errors.forEach(error => {
                    switch (error.code) {
                        case 'string.empty':
                            error.message = 'can not be empty'
                            break;
                        case 'string.min':
                            error.message = 'must be lower than 3'
                            break;
                        default:
                            break;
                    }
                })
                return errors
            }),
        username: Joi.string()
            .min(3)
            .max(20)
            .error(errors => {
                errors.forEach(error => {
                    switch (error.code) {
                        case 'string.empty':
                            error.message = 'can not be empty'
                            break;
                        case 'string.min':
                            error.message = 'must be lower than 3'
                            break;
                        default:
                            break;
                    }
                })
                return errors
            }),

        email:Joi.string()
            .required()
            .email({ tlds: { allow: false }})
    })


export default userValidator;