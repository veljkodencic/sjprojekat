import mongoose from 'mongoose'

const suv = mongoose.Schema({
    marka: {type: String, required: true},
    model: {type: String, required: true},
    snaga: {type: Number, default: true},
    kubikaza: {type: Number, default: true},
    brojVrata: {type: Number, default: true},
    cenaPoDanu: {type: Number, default: true}
});

const Suv = mongoose.model("Suv", suv);

export default Suv;