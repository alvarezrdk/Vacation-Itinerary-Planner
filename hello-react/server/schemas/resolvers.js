const { AuthenticationError } = require('apollo-server-express');
const { Profile, Itinerary } = require('../models'); 
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
    getItineraries: async (_, { userId }) => {
      try {
        // Ensure the user is authenticated to view their itineraries
        if (!userId) {
          throw new AuthenticationError('You need to be logged in to view your itineraries');
        }

        // Fetch itineraries for the specified user
        const itineraries = await Itinerary.find({ userId });
        return itineraries;
      } catch (error) {
        throw new Error(`Error fetching itineraries: ${error.message}`);
      }
    },

    getUserProfile: async (_, { userId }) => {
      try {
        // Fetch user profile by ID
        const userProfile = await User.findOne({ _id: userId });
        return userProfile;
      } catch (error) {
        throw new Error(`Error fetching user profile: ${error.message}`);
      }
    },

    getUserItineraries: async (_, { userId }) => {
      try {
        // Ensure the user is authenticated to view their itineraries
        if (!userId) {
          throw new AuthenticationError('You need to be logged in to view your itineraries');
        }

        // Fetch itineraries for the specified user
        const itineraries = await Itinerary.find({ userId });
        return itineraries;
      } catch (error) {
        throw new Error(`Error fetching user itineraries: ${error.message}`);
      }
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

    createItinerary: async (_, { userId, title, description }) => {
      // Implement itinerary creation logic
      const itinerary = await Itinerary.create({ userId, title, description });
      return itinerary;
    },

    updateItinerary: async (_, { id, title, description }) => {
      // Implement itinerary update logic
      const updatedItinerary = await Itinerary.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );

      return updatedItinerary;
    },
    // Add a third argument to the resolver to access data in our `context`
    // addSkill: async (parent, { profileId, skill }, context) => {
    //   // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
    //   if (context.user) {
    //     return Profile.findOneAndUpdate(
    //       { _id: profileId },
    //       {
    //         $addToSet: { skills: skill },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
      // If user attempts to execute this mutation and isn't logged in, throw an error
     // throw new AuthenticationError('You need to be logged in!');
    //},
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Make it so a logged in user can only remove a skill from their own profile
    // removeSkill: async (parent, { skill }, context) => {
    //   if (context.user) {
    //     return Profile.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { skills: skill } },
    //       { new: true }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    addDestination: async (_, { itineraryId, location, startDate, endDate }) => {
      // Implement destination creation logic
      const destination = await Destination.create({
        itineraryId,
        location,
        startDate,
        endDate,
      });

      return destination;
    },

    updateDestination: async (_, { id, location, startDate, endDate }) => {
      // Implement destination update logic
      const updatedDestination = await Destination.findByIdAndUpdate(
        id,
        { location, startDate, endDate },
        { new: true }
      );

      return updatedDestination;
    },

    updateDestinationDates: async (_, { id, startDate, endDate }) => {
      // Implement destination dates update logic
      const updatedDestination = await Destination.findByIdAndUpdate(
        id,
        { startDate, endDate },
        { new: true }
      );

      return updatedDestination;
    },

    deleteDestination: async (_, { id }) => {
      // Implement destination deletion logic
      await Destination.findByIdAndDelete(id);
      return true;
    },

    updateUserProfile: async (_, { userId, email }) => {
      // Implement user profile update logic
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { email },
        { new: true }
      );

      return updatedUser;
    },

    bookRestaurant: async (
      _,
      { itineraryId, restaurantName, reservationDate, numberOfGuests }
    ) => {
      // Implement restaurant booking logic
      const reservation = await RestaurantReservation.create({
        itineraryId,
        restaurantName,
        reservationDate,
        numberOfGuests,
      });

      return reservation;
    },

    cancelRestaurantReservation: async (_, { reservationId }) => {
      // Implement restaurant reservation cancellation logic
      await RestaurantReservation.findByIdAndDelete(reservationId);
      return true;
    },
  
  },
};

module.exports = resolvers;
