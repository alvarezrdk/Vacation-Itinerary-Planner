import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_ITINERARY = gql`
  mutation createItinerary($location: String!, $startDate: String!, $endDate: String!, $guests: Int) {
    createItinerary(location: $location, startDate: $startDate, endDate: $endDate, guests: $guests ) {
      _id
    }
  }
`;

export const UPDATE_ITINERARY = gql`
  mutation updateItinerary($id: ID!, $title: String!, $description: String!) {
    updateItinerary(id: $id, title: $title, description: $description) {
      id
      title
      description
    }
  }
`;

export const CREATE_RESTAURANT = gql`
  mutation createRestaurant($name: String!, $cuisine: String!, $location: String!, $reservationDate: String!, $reservationTime: String!, $guests: Int!) {
    createRestaurant(name: $name, cuisine: $cuisine, location: $location, reservationDate: $reservationDate, reservationTime: $reservationTime, guests: $guests) {
      _id
    }
  }
`;

export const CREATE_EX = gql`
  mutation createEx($name: String!, $cuisine: String!, $location: String!, $date: String!, $time: String!, $guests: Int!) {
    createEx(name: $name, location: $location, date: $date, time: $time, guests: $guests) {
      _id
    }
  }
`;

export const ADD_RESTAURANT_TO_ITINERARY = gql`
  mutation addRestaurantToItinerary($itineraryId: ID!, $restaurantId: ID!) {
    addRestaurantToItinerary(itineraryId: $itineraryId, restaurantId: $restaurantId) {
      _id
    }
  }
`;

export const ADD_EX_TO_ITINERARY = gql`
  mutation addExToItinerary($itineraryId: ID!, $exId: ID!) {
    addExToItinerary(itineraryId: $itineraryId, exId: $exId) {
      _id
    }
  }
`;

export const ADD_AIRBNB_TO_ITINERARY = gql`
  mutation addAirbnbToItinerary($itineraryId: ID!, $airbnbName: String!, $airbnbCheckInDate: String!, $airbnbCheckOutDate: String!) {
    addAirbnbToItinerary(itineraryId: $itineraryId, airbnbName: $airbnbName, airbnbCheckInDate: $airbnbCheckInDate, airbnbCheckOutDate: $airbnbCheckOutDate) {
      _id
    }
  }
`;

export const REMOVE_PROFILE = gql`
  mutation removeProfile($_id: ID!) {
    removeProfile(_id: $_id) {
      _id
    }
  }
`;

export const DELETE_ITINERARY = gql`
  mutation deleteItinerary($itineraryId: ID!) {
    deleteItinerary(itineraryId: $itineraryId) {
      _id
    }
  }
`;

export const DELETE_EX = gql`
  mutation deleteEx($exId: ID!) {
    deleteEx(exId: $exId) {
      _id
    }
  }
`;