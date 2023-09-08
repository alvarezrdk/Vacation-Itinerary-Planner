import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      id
      username
      email
    }
  }
`;

export const CREATE_ITINERARY = gql`
  mutation createItinerary($userId: ID!, $title: String!, $description: String!) {
    createItinerary(userId: $userId, title: $title, description: $description) {
      id
      title
      description
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

export const ADD_DESTINATION = gql`
  mutation addDestination($itineraryId: ID!, $location: String!, $startDate: String!, $endDate: String!) {
    addDestination(itineraryId: $itineraryId, location: $location, startDate: $startDate, endDate: $endDate) {
      id
      location
      startDate
      endDate
    }
  }
`;

export const UPDATE_DESTINATION = gql`
  mutation updateDestination($id: ID!, $location: String!, $startDate: String!, $endDate: String!) {
    updateDestination(id: $id, location: $location, startDate: $startDate, endDate: $endDate) {
      id
      location
      startDate
      endDate
    }
  }
`;

export const UPDATE_DESTINATION_DATES = gql`
  mutation updateDestinationDates($id: ID!, $startDate: String!, $endDate: String!) {
    updateDestinationDates(id: $id, startDate: $startDate, endDate: $endDate) {
      id
      startDate
      endDate
    }
  }
`;

export const DELETE_DESTINATION = gql`
  mutation deleteDestination($id: ID!) {
    deleteDestination(id: $id)
  }
`;

export const SEARCH_ITINERARIES = gql`
  query searchItineraries($query: String!) {
    searchItineraries(query: $query) {
      id
      title
      description
    }
  }
`;


export const UPDATE_USER_PROFILE = gql`
  mutation updateUserProfile($userId: ID!, $email: String!) {
    updateUserProfile(userId: $userId, email: $email) {
      id
      username
      email
    }
  }
  `;
  export const BOOK_RESTAURANT = gql`
  mutation bookRestaurant($itineraryId: ID!, $restaurantName: String!, $reservationDate: String!, $numberOfGuests: Int!) {
    bookRestaurant(itineraryId: $itineraryId, restaurantName: $restaurantName, reservationDate: $reservationDate, numberOfGuests: $numberOfGuests) {
      id
      restaurantName
      reservationDate
      numberOfGuests
    }
  }
`;

export const CANCEL_RESTAURANT_RESERVATION = gql`
  mutation cancelRestaurantReservation($reservationId: ID!) {
    cancelRestaurantReservation(reservationId: $reservationId)
  }
`;

export const ADD_USER_REVIEW = gql`
mutation addUserReview($itineraryId: ID!, $destinationId: ID!, $rating: Int!, $reviewText: String!) {
  addUserReview(itineraryId: $itineraryId, destinationId: $destinationId, rating: $rating, reviewText: $reviewText) {
    id
    rating
    reviewText
  }
}
`
;