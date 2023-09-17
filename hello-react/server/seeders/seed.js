const db = require('../config/connection');
const { Profile, Restaurants, Experiences } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const restaurantSeeds = require('./restaurantSeeds.json');
const experienceSeeds = require('./experienceSeeds.json');

db.once('open', async () => {
  try {
    
    await Profile.deleteMany({});
    await Restaurants.deleteMany({});
    await Experiences.deleteMany({});

    await Profile.create(profileSeeds);

    for (const restaurantData of restaurantSeeds.denver_restaurants) {
      await Restaurants.create(restaurantData);
    }

    for (const restaurantData of restaurantSeeds.miami_restaurants) {
      await Restaurants.create(restaurantData);
    }

    for (const experienceData of experienceSeeds.denver_experiences) {
      await Experiences.create(experienceData);
    }

    for (const experienceData of experienceSeeds.miami_experiences) {
      await Experiences.create(experienceData);
    }

    console.log('Data seeding completed.');
    process.exit(0);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
});
