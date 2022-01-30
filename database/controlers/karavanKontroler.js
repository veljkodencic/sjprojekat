import Karavan from "../models/karavan.js";
import {validateKaravanInput} from "../validation/validation.js";
import {validateKaravanUpdate, } from "../validation/validationUpdate.js";



export const addKaravan = async (request, response) => {
    const {marka , model, snaga, kubikaza, brojVrata, cenaPoDanu} = request.body;

    const validInput = validateKaravanInput(request, response);
    if (validInput === false) {
        return;
    }

    const karavan = new Karavan({
        marka: marka,
        model: model,
        snaga: snaga,
        kubikaza: kubikaza,
        brojVrata: brojVrata,
        cenaPoDanu: cenaPoDanu
    });
    try {
        const newKaravan = await karavan.save();
        response.status(200).json({message: `Uspesno dodat: ${newKaravan.productName}`})
    } catch(error) {
        response.status(400).json({message: error.message});
    }
}

export const getKaravan = async(request, response) => {
    const {karavanId} = request.body.karavanId;
    try {
        const karavan = await Karavan.findById(karavan);
        if (!karavan) {
            response.status(400).json({ message: `Pogresan ID! Karavan sa ${karavanId} ID ne postoji`});
            return;
        }
        response.status(200).json(karavan);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const getAllKaravan = async(request, response) => {
    try {
        const karavan = await Karavan.find();
        if (!karavan) {
            response.status(400).json({ message: "Trenutno nema karavan" });
            return;
        }
        response.status(200).json(karavan);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const updateKaravan = async(request, response) => {
    const karavanId = request.body.karavanId;
    const updateContent = request.body;
    try {
        const karavan = await Karavan.findById(karavanId);
        if (!karavan) {
            response.status(400).json({message: `Pogresan ID! Karavan sa ${karavan} ne postoji`});
            return;
        }
        const validInput = validateKaravanUpdate(request, response);
        if (validInput === false) {
            return;
        }
        const newKaravan = await Karavan.findByIdAndUpdate(karavan._id, updateContent);
        response.status(200).json(`Uspesno promenjen karavan ${newKaravan.productName}`);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const deleteKaravan = async(request, response) => {
    const karavanId = request.body.karavanId;
    try {
        const karavan = Karavan.findById(karavanId)
        if (!karavan) {
            response.status(400).json({message: `Pogresan ID! Karavan sa ${karavanId} ID ne postoji`})
        }
        await Karavan.findByIdAndDelete(karavanId);
        response.status(200).json({ message: `Uspesno obrisan karavan: ${karavanId.productName}`});

    } catch (error) {
        response.status(400).json({message: error.details})
    }
}