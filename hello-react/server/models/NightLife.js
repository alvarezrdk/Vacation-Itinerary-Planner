const { Schema, model } = require('mongoose');


const nightLifeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },

});

const NightLife = model('NightLife', nightLifeSchema);

module.exports = NightLife;
