import { gql } from '@apollo/client';

export const GET_ITINERARIES = gql`
  query getItineraries($userId: ID!) {
    itineraries(userId: $userId) {
      id
      title
      description
    }
  }
`;

export const GET_DESTINATIONS = gql`
  query getDestinations($itineraryId: ID!) {
    destinations(itineraryId: $itineraryId) {
      id
      location
      startDate
      endDate
    }
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

export const GET_USER_PROFILE = gql`
  query getUserProfile($userId: ID!) {
    userProfile(userId: $userId) {
      id
      username
      email
    }
  }
`;

export const GET_USER_ITINERARY =gql`
query getUserItineraries($userId: ID!) {
  userItineraries(userId: $userId) {
    id
    title
    description
  }
}
`
;

export const GET_ITENERARY_DETAILS = gql`
query getItineraryDetails($itineraryId: ID!) {
  itineraryDetails(itineraryId: $itineraryId) {
    id
    title
    description
    destinations {
      id
      location
      startDate
      endDate
    }
    restaurantReservations {
      id
      restaurantName
      reservationDate
      numberOfGuests
    }
    bnbReservations {
      id
      bnbName
      checkInDate
      checkOutDate
    }
  }
}
`
;

export const GET_BNB_RESERVATION = gql`
query getBnbReservations($itineraryId: ID!) {
  bnbReservations(itineraryId: $itineraryId) {
    id
    bnbName
    checkInDate
    checkOutDate
  }
}
`
;
export const Get_Resturant_Reservations =gql`
query getRestaurantReservations($itineraryId: ID!) {
  restaurantReservations(itineraryId: $itineraryId) {
    id
    restaurantName
    reservationDate
    numberOfGuests
  }
}
`
;
export const GET_USER_Reservations =gql`
query getUserReservations($itineraryId: ID!) {
  userReservations(itineraryId: $itineraryId) {
    id
    reservationType
    reservationDetails {
      ... on RestaurantReservation {
        id
        restaurantName
        reservationDate
        numberOfGuests
      }
      ... on BnbReservation {
        id
        bnbName
        checkInDate
        checkOutDate
      }
    }
  }
}
`
;
