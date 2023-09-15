const { AuthenticationError } = require('apollo-server-express');
const { Profile, Itinerary, Restaurants, Experiences } = require('../models'); 
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    singleProfile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    allProfiles: async () => {
      return Profile.find();
    },
    allItineraries: async () => {
      return Itinerary.find();
    },
    singleItinerary: async (parent, { itineraryId }) => {
      return Itinerary.findOne({ _id: itineraryId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const profile = await Profile.create({ username, email, password });
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

    createRestaurant: async (parent, { name, cuisine, location, reservationDate, reservationTime, guests }) => {
      const restaurant = await Restaurants.create({ name, cuisine, location, reservationDate, reservationTime, guests });
      return restaurant;
    },

    createEx: async (parent, { name, location, date, time, guests }) => {
      const ex = await Experiences.create({ name, location, date, time, guests });
      return ex;
    },

    addRestaurantToItinerary: async (parent, {itineraryId, restaurantId} ) => {
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
    deleteItinerary: async (parent, { itineraryId }) => {
      const existingItinerary = await Itinerary.findById(itineraryId);
    
      if (!existingItinerary) {
        throw new Error("Itinerary not found");
      }
          await Itinerary.findByIdAndDelete(itineraryId);
    
      return "Itinerary deleted successfully";
    },
    deleteRestaurant: async (parent, { restaurantId }) => {
      const existingRestaurant = await Restaurants.findById(restaurantId);
    
      if (!existingRestaurant) {
        throw new Error("Restaurant not found");
      }
          await Restaurants.findByIdAndDelete(restaurantId);
    
      return "Restaurant deleted successfully";
    },
    deleteEx: async (parent, { exId }) => {
      const existingExperience = await Experiences.findById(exId);
    
      if (!existingExperience) {
        throw new Error("Experience not found");
      }
          await Experiences.findByIdAndDelete(exId);
    
      return "Experience deleted successfully";
    },
  },
};

module.exports = resolvers;
