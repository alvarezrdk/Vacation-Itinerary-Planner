const { Schema, model } = require('mongoose');

const restaurantsSchema = new Schema({
    
    name: {
        type: String,
        required: true,
        trim: true,
    },
    cuisine: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    reservationDate: {
        type: String,
        required: true,
        trim: true,
    },
    reservationTime: {
        type: String,
        required: true,
        trim: true,
    },
});

const Restaurants = model('Restaurants', restaurantsSchema);


module.exports = Restaurants;