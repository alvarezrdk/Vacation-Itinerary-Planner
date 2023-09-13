const { AuthenticationError } = require('apollo-server-express');
const { Profile, Itinerary, Restaurants, Experiences } = require('../models'); 
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    createItinerary: async (parent, { location, startDate, endDate, airbnbAddress, airbnbCheckInDate, airbnbCheckOutDate, guests }) => {
      const itinerary = await Itinerary.create({ location, startDate, endDate, airbnbAddress, airbnbCheckInDate, airbnbCheckOutDate, guests });
      return itinerary;
    },

    createRestraunt: async (parent, { name, cuisine, location, reservationDate, reservationTime, guests }) => {
      const restaurant = await Restaurants.create({ name, cuisine, location, reservationDate, reservationTime, guests });
      return restaurant;
    },

    createEx: async (parent, { name, location, date, time, guests }) => {
      const ex = await Experiences.create({ name, location, date, time, guests });
      return ex;
    },

    addRestrauntToItinerary: async (parent, {itineraryId, restaurantId} ) => {
      const itinerary = await Itinerary.findOneAndUpdate(
        { _id: itineraryId },
        {
          $addToSet: { restaurants: restaurantId },
        },
        {
          new: true,
          runValidators: true,
        }
      );
      return itinerary;
    },

    addExToItinerary: async (parent, { itineraryId, exId }) => {
      const itinerary = await Itinerary.findOneAndUpdate(
        { _id: itineraryId },
        {
          $addToSet: { experiences: exId },
        },
        {
          new: true,
          runValidators: true,
        }
      );
      return itinerary;
    },
    
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
