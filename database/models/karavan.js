import mongoose from 'mongoose'

const karavan = mongoose.Schema({
    marka: {type: String, required: true},
    model: {type: String, required: true},
    snaga: {type: Number, default: true},
    kubikaza: {type: Number, default: true},
    brojVrata: {type: Number, default: true},
    cenaPoDanu: {type: Number, default: true}
});

const Karavan = mongoose.model("Karavan", karavan);

export default Karavan;