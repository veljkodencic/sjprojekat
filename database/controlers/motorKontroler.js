import Motor from "../models/motor.js";
import {validateMotorInput} from "../validation/validation.js";
import {validateMotorUpdate} from "../validation/validationUpdate.js";



export const addMotor = async (request, response) => {
    const {marka , model, snaga, kubikaza, cenaPoDanu} = request.body;

    const validInput = validateMotorInput(request, response);
    if (validInput === false) {
        return;
    }

    const motor = new Motor({
        marka: marka,
        model: model,
        snaga: snaga,
        kubikaza: kubikaza,
        cenaPoDanu: cenaPoDanu
    });
    try {
        const newMotor = await motor.save();
        response.status(200).json({message: `Uspesno dodato: ${newMotor.productName}`})
    } catch(error) {
        response.status(400).json({message: error.message});
    }
}

export const getMotor = async(request, response) => {
    const {motorId} = request.body.motorId;
    try {
        const motor = await Motor.findById(motor);
        if (!motor) {
            response.status(400).json({ message: `Pogresan ID! Motor sa ${motorId} ne postoji`});
            return;
        }
        response.status(200).json(motor);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const getAllMotor = async(request, response) => {
    try {
        const motor = await Motor.find();
        if (!motor) {
            response.status(400).json({ message: "Trenutno nema motora" });
            return;
        }
        response.status(200).json(motor);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const updateMotor = async(request, response) => {
    const motorId = request.body.motorId;
    const updateContent = request.body;
    try {
        const motor = await Motor.findById(motorId);
        if (!motor) {
            response.status(400).json({message: `Pogresan ID! Motor sa ${motor} ID ne postoji`});
            return;
        }
        const validInput = validateMotorUpdate(request, response);
        if (validInput === false) {
            return;
        }
        const newMotor = await Motor.findByIdAndUpdate(motor._id, updateContent);
        response.status(200).json(`Uspesno promenjen motor ${newMotor.productName}`);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
}

export const deleteMotor = async(request, response) => {
    const motorId = request.body.motorId;
    try {
        const motor = Motor.findById(motorId)
        if (!motor) {
            response.status(400).json({message: `Pogresan ID! Motor sa ${motorId} ID ne postoji`})
        }
        await Motor.findByIdAndDelete(motorId);
        response.status(200).json({ message: `Uspesno obrisan motor: ${motorId.productName}`});

    } catch (error) {
        response.status(400).json({message: error.details})
    }
}