import Limuzina from "../models/limuzina.js";
import {validateLimuzinaInput} from "../validation/validation.js";
import {validateLimuzinaUpdate, } from "../validation/validationUpdate.js";



export const addLimuzina = async (request, response) => {
    const {marka , model, snaga, kubikaza, brojVrata, cenaPoDanu} = request.body;

    const validInput = validateLimuzinaInput(request, response);
    if (validInput === false) {
        return;
    }

    const limuzina = new Limuzina({
        marka: marka,
        model: model,
        snaga: snaga,
        kubikaza: kubikaza,
        brojVrata: brojVrata,
        cenaPoDanu: cenaPoDanu
    });
    try {
        const newLimuzina = await limuzina.save();
        response.status(200).json({message: `Uspesno dodat: ${newLimuzina.productName}`})
    } catch(error) {
        response.status(400).json({message: error.message});
    }
}

export const getLimuzina = async(request, response) => {
    const {limuzinaId} = request.body.limuzinaId;
    try {
        const limuzina = await Limuzina.findById(limuzina);
        if (!limuzina) {
            response.status(400).json({ message: `Pogresan ID! Limuzina sa ${limuzinaId} ID ne postoji`});
            return;
        }
        response.status(200).json(limuzina);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const getAllLimuzina = async(request, response) => {
    try {
        const limuzina = await Limuzina.find();
        if (!limuzina) {
            response.status(400).json({ message: "Trenutno nema limuzina" });
            return;
        }
        response.status(200).json(limuzina);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const updateLimuzina = async(request, response) => {
    const limuzinaId = request.body.limuzinaId;
    const updateContent = request.body;
    try {
        const limuzina = await Limuzina.findById(limuzinaId);
        if (!limuzina) {
            response.status(400).json({message: `Pogresan ID! Limuzina sa ${limuzina} ne postoji`});
            return;
        }
        const validInput = validateLimuzinaUpdate(request, response);
        if (validInput === false) {
            return;
        }
        const newLimuzina = await Limuzina.findByIdAndUpdate(limuzina._id, updateContent);
        response.status(200).json(`Uspesno promenjen limuzina ${newLimuzina.productName}`);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const deleteLimuzina = async(request, response) => {
    const limuzinaId = request.body.limuzinaId;
    try {
        const limuzina = Limuzina.findById(limuzinaId)
        if (!limuzina) {
            response.status(400).json({message: `Pogresan ID! Limuzina sa ${limuzinaId} ID ne postoji`})
        }
        await Limuzina.findByIdAndDelete(limuzinaId);
        response.status(200).json({ message: `Uspesno obrisana limuzina: ${limuzinaId.productName}`});

    } catch (error) {
        response.status(400).json({message: error.details})
    }
}