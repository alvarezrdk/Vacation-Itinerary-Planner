const { Schema, model } = require('mongoose');

const experiencesSchema = new Schema({
    
    name: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: String,
        required: true,
        trim: true,
    },
    time: {
        type: String,
        required: true,
        trim: true,
    },
});

const Experiences = model('Experiences', experiencesSchema);


module.exports = Experiences;