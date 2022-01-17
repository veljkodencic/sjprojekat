import mongoose from 'mongoose'

const entity = mongoose.Schema({
    name: {type: String, required: true},
    length: {type: String, required: true},
    age: {type: String, required: true},
    gender: {type: String, default: true}
});

const Entity = mongoose.model("Entity", entity);

export default Entity;