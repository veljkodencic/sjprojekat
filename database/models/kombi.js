import mongoose from 'mongoose'

const kombi = mongoose.Schema({
    marka: {type: String, required: true},
    model: {type: String, required: true},
    snaga: {type: Number, default: true},
    kubikaza: {type: Number, default: true},
    brojVrata: {type: Number, default: true},
    cenaPoDanu: {type: Number, default: true}
});

const Kombi = mongoose.model("Kombi", kombi);

export default Kombi;