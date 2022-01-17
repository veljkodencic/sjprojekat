import Entity from "../models/testEntry.js";
import { validateEntityEntry } from "../validation/validation";

export const addEntity = async(req, res) => {
    const{name, length, gender, age} = req.body;
    if(!validateEntityEntry(name, length, gender, res)){
        return;
    }
    try {
        const entity = await Entity.findOne({
            name: name,
            length:   length,
            gender: gender,
            age: age
        });
        if(entity){
            res.status(400).json({message: "Vec ima u bazi."});
            return;
        }
        const newEntity = new Entity({
            name: name,
            length:   length,
            gender: gender,
            age: age
        });
        await newEntity.save();
        res.status(200).json({message: "Uspesno sacuvan entity."});
    } catch (error) {
        res.status(400).json({message: error.message});
        return;
    }
}

export const getall = async (req, res) => {
    try {
    const entities = await Entity.find();
    if(!entities){
        res.status(400).json ({message: "Nema entiteata trenutno u bazi."});
        return;
    }
        res.status(200).json(entities);
    } catch (error) {
        res.status(200).json({message: error.message});
        return;
    }
}