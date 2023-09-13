const { Schema, model } = require('mongoose');

const itinerarySchema = new Schema({
    location: {
        type: String,
        required: true,
        trim: true,
    },
    startDate: {
        type: String,
        required: true,
        trim: true,
    },
    endDate: {
        type: String,
        required: true,
        trim: true,
    },
    guests: {
        type: Int,
        trim: true,
    },
    airbnbAddress: {
        type: String,
        required: true,
        trim: true,
    },
    airbnbCheckInDate: {
        type: String,
        required: true,
        trim: true,
    },
    airbnbCheckOutDate: {
        type: String,
        required: true,
        trim: true,
    },
    restaurants:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Restaurants'
          }
          ],
    experiences: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Experiences'
          }
      ],
});

const Itinerary = model('Itinerary', itinerarySchema);


module.exports = Itinerary;
