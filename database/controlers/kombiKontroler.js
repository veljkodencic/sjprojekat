import Kombi from "../models/kombi.js";
import {validateKombiInput} from "../validation/validation.js";
import {validateKombiUpdate, } from "../validation/validationUpdate.js";



export const addKombi = async (request, response) => {
    const {marka , model, snaga, kubikaza, brojVrata, cenaPoDanu} = request.body;

    const validInput = validateKombiInput(request, response);
    if (validInput === false) {
        return;
    }

    const kombi = new Kombi({
        marka: marka,
        model: model,
        snaga: snaga,
        kubikaza: kubikaza,
        brojVrata: brojVrata,
        cenaPoDanu: cenaPoDanu
    });
    try {
        const newKombi = await kombi.save();
        response.status(200).json({message: `Uspesno dodat: ${newKombi.productName}`})
    } catch(error) {
        response.status(400).json({message: error.message});
    }
}

export const getKombi = async(request, response) => {
    const {kombiId} = request.body.kombiId;
    try {
        const kombi = await Kombi.findById(kombi);
        if (!kombi) {
            response.status(400).json({ message: `Pogresan ID! Kombi sa ${kombiId} ID ne postoji`});
            return;
        }
        response.status(200).json(kombi);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const getAllKombi = async(request, response) => {
    try {
        const kombi = await Kombi.find();
        if (!kombi) {
            response.status(400).json({ message: "Trenutno nema kombi" });
            return;
        }
        response.status(200).json(kombi);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const updateKombi = async(request, response) => {
    const kombiId = request.body.kombiId;
    const updateContent = request.body;
    try {
        const kombi = await Kombi.findById(kombiId);
        if (!kombi) {
            response.status(400).json({message: `Pogresan ID! Kombi sa ${kombi} ne postoji`});
            return;
        }
        const validInput = validateKombiUpdate(request, response);
        if (validInput === false) {
            return;
        }
        const newKombi = await Kombi.findByIdAndUpdate(kombi._id, updateContent);
        response.status(200).json(`Uspesno promenjen kombi ${newKombi.productName}`);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const deleteKombi = async(request, response) => {
    const kombiId = request.body.kombiId;
    try {
        const kombi = Kombi.findById(kombiId)
        if (!kombi) {
            response.status(400).json({message: `Pogresan ID! Kombi sah ${kombiId} ID ne postoji`})
        }
        await Kombi.findByIdAndDelete(kombiId);
        response.status(200).json({ message: `Uspesno obrisan kombi: ${kombiId.productName}`});

    } catch (error) {
        response.status(400).json({message: error.details})
    }
}