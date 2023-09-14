const db = require('../config/connection');
const { Profile } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const restaurantSeeds = require('./restaurantSeeds.json');
const nightLifeSeeds = require('./nightLifeSeeds.json');
const activitiesSeeds = require('./activitiesSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
