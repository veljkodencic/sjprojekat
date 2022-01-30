import mongoose from 'mongoose'

const motor = mongoose.Schema({
    marka: {type: String, required: true},
    model: {type: String, required: true},
    snaga: {type: Number, default: true},
    kubikaza: {type: Number, default: true},
    cenaPoDanu: {type: Number, default: true}
});

const Motor = mongoose.model("Motor", motor);

export default Motor;