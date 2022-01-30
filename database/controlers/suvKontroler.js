import Suv from "../models/suv.js";
import {validateSuvInput} from "../validation/validation.js";
import {validateSuvUpdate, } from "../validation/validationUpdate.js";



export const addSuv = async (request, response) => {
    const {marka , model, snaga, kubikaza, brojVrata, cenaPoDanu} = request.body;

    const validInput = validateSuvInput(request, response);
    if (validInput === false) {
        return;
    }

    const suv = new Suv({
        marka: marka,
        model: model,
        snaga: snaga,
        kubikaza: kubikaza,
        brojVrata: brojVrata,
        cenaPoDanu: cenaPoDanu
    });
    try {
        const newSuv = await suv.save();
        response.status(200).json({message: `Uspesno dodat: ${newSuv.productName}`})
    } catch(error) {
        response.status(400).json({message: error.message});
    }
}

export const getSuv = async(request, response) => {
    const {suvId} = request.body.suvId;
    try {
        const suv = await Suv.findById(suv);
        if (!suv) {
            response.status(400).json({ message: `Pogresan ID! Suv sa ${suvId} ID ne postoji`});
            return;
        }
        response.status(200).json(suv);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const getAllSuv = async(request, response) => {
    try {
        const suv = await Suv.find();
        if (!suv) {
            response.status(400).json({ message: "Trenutno nema suv" });
            return;
        }
        response.status(200).json(suv);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const updateSuv = async(request, response) => {
    const suvId = request.body.suvId;
    const updateContent = request.body;
    try {
        const suv = await Suv.findById(suvId);
        if (!suv) {
            response.status(400).json({message: `Pogresan ID! Suv sa ${suv} ne postoji`});
            return;
        }
        const validInput = validateSuvUpdate(request, response);
        if (validInput === false) {
            return;
        }
        const newSuv = await Suv.findByIdAndUpdate(suv._id, updateContent);
        response.status(200).json(`Uspesno promenjen suv ${newSuv.productName}`);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const deleteSuv = async(request, response) => {
    const suvId = request.body.suvId;
    try {
        const suv = Suv.findById(suvId)
        if (!suv) {
            response.status(400).json({message: `Pogresan ID! Suv sa ${suvId} ID ne postoji`})
        }
        await Suv.findByIdAndDelete(suvId);
        response.status(200).json({ message: `Uspesno obrisan suv: ${suvId.productName}`});

    } catch (error) {
        response.status(400).json({message: error.details})
    }
}