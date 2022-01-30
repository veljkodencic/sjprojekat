import mongoose from 'mongoose'

const limuzina = mongoose.Schema({
    marka: {type: String, required: true},
    model: {type: String, required: true},
    snaga: {type: Number, default: true},
    kubikaza: {type: Number, default: true},
    brojVrata: {type: Number, default: true},
    cenaPoDanu: {type: Number, default: true}
});

const Limuzina = mongoose.model("Limuzina", limuzina);

export default Limuzina;