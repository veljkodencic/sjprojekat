import Joi from "joi";


const karavanSchema = Joi.object({
    marka: Joi.string().required(),
    model: Joi.string().required(),
    snaga: Joi.number().required(),
    kubikaza: Joi.number().integer().required(),
    brojVrata: Joi.number().required(),
    cena: Joi.number().required()
});

export const validateKaravanUpdate = (request, response) => {
    return karavanSchema.validate(request.body, karavanSchema, (error) => { //ovamo sam promenio da probam dal radi 
        if (error) {
            response.status(400).json({message: error.details});
            return false;
        } else {
            return true;
        }
    });
}

const limuzinaSchema = Joi.object({
    marka: Joi.string().required(),
    model: Joi.string().required(),
    snaga: Joi.number().required(),
    kubikaza: Joi.number().integer().required(),
    brojVrata: Joi.number().required(),
    cena: Joi.number().required()
});

export const validateLimuzinaUpdate = (request, response) => {
    return Joi.validate(request.body, limuzinaSchema, (error) => {
        if (error) {
            response.status(400).json({message: error.details});
            return false;
        } else {
            return true;
        }
    });
}

const motorSchema = Joi.object({
    marka: Joi.string().required(),
    model: Joi.string().required(),
    snaga: Joi.number().required(),
    kubikaza: Joi.number().integer().required(),
    cena: Joi.number().required()
});

export const validateMotorUpdate = (request, response) => {
    return Joi.validate(request.body, motorSchema, (error) => {
        if (error) {
            response.status(400).json({message: error.details});
            return false;
        } else {
            return true;
        }
    });
}

const suvSchema = Joi.object({
    marka: Joi.string().required(),
    model: Joi.string().required(),
    snaga: Joi.number().required(),
    kubikaza: Joi.number().integer().required(),
    brojVrata: Joi.number().required(),
    cena: Joi.number().required(),
});

export const validateSuvUpdate = (request, response) => {
    return Joi.validate(request.body, suvSchema, (error) => {
        if (error) {
            response.status(400).json({message: error.details});
            return false;
        } else {
            return true;
        }
    });
}

const kombiSchema = Joi.object({
    marka: Joi.string().required(),
    model: Joi.string().required(),
    snaga: Joi.number().required(),
    kubikaza: Joi.number().integer().required(),
    brojVrata: Joi.number().required(),
    cena: Joi.number().required(),
});

export const validateKombiUpdate = (request, response) => {
    return Joi.validate(request.body, kombiSchema, (error) => {
        if (error) {
            response.status(400).json({message: error.details});
            return false;
        } else {
            return true;
        }
    });
}
