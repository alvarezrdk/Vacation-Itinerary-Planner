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
        trim: true,
    },
    reservationDate: {
        type: String,
        trim: true,
    },
    reservationTime: {
        type: String,
        trim: true,
    },
    guests: {
        type: Number,
        trim: true,
    }
});

const Restaurants = model('Restaurants', restaurantsSchema);


module.exports = Restaurants;