const db = require('../config/connection');
const { Profile, Restaurants, Experiences } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const restaurantSeeds = require('./restaurantSeeds.json');
const nightLifeSeeds = require('./nightLifeSeeds.json');
const activitiesSeeds = require('./activitiesSeeds.json');

db.once('open', async () => {
  try {
    // Clear existing data
    await Profile.deleteMany({});
    await Restaurants.deleteMany({});
    await Experiences.deleteMany({});

    // Seed new data
    await Profile.create(profileSeeds);
    await Restaurants.create(restaurantSeeds);
    await Experiences.create(activitiesSeeds.concat(nightLifeSeeds));

    console.log('All done!');
    process.exit(0);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
});
