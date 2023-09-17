const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    username: String!
    email: String!
    password: String!
  }

  type Itinerary {
    _id: ID
    location: String!
    guests: String
    startDate: String!
    endDate: String!
    airbnbName: String!
    airbnbCheckInDate: String!
    airbnbCheckOutDate: String!
    restaurants: [String]!
    experiences: [String]!
  }

  type Restaurants {
    _id: ID
    name: String!
    cuisine: String
    location: String!
    reservationDate: String!
    reservationTime: String!
    guests: String
  }

  type Experiences {
    _id: ID
    name: String!
    location: String!
    date: String!
    time: String!
    guests: String
  }


  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    allProfiles: [Profile]!
    singleProfile(profileId: ID!): Profile
    allItineraries: [Itinerary]!
    singleItinerary(itineraryId: ID!): Itinerary
    restaurantsByLocation(location: String!): [Restaurants]

    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeProfile: Profile
    createItinerary(location: String!, startDate: String!, endDate: String!, guests: Int): Itinerary
    createRestaurant(name: String!, cuisine: String!, location: String!, reservationDate: String!, reservationTime: String!, guests: String!): Restaurants
    createEx(name: String!, location: String!, date: String!, time: String!, guests: String!): Experiences
    addRestaurantToItinerary(
      itineraryId: ID!
      restaurantId: ID!
    ): Itinerary
    addExToItinerary(
      itineraryId: ID!
      exId: ID!
    ): Itinerary
    addAirbnbToItinerary(
      itineraryId: ID!
      airbnbName: ID!
    ): Itinerary
    deleteItinerary(itineraryId: ID!): Itinerary
    deleteRestaurant(restaurantId: ID!): Restaurants
    deleteEx(exId: ID!): Experiences
 
  }
`;

module.exports = typeDefs;