import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE, GET_USER_ITINERARY } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = () => {
  const { profileId } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged-in user's information
  const { loading, data } = useQuery(profileId ? QUERY_SINGLE_PROFILE : {
    variables: { profileId: profileId },
  });

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me || data?.profile || {};

  // Use React Router's `<Navigate />` component to redirect to the personal profile page if the username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  // Fetch the user's itineraries
  const { data: itineraryData } = '' //useQuery(GET_USER_ITINERARY, {
  //   variables: { userId: profile._id },
  //});

  const userItineraries = itineraryData?.userItineraries || [];

  return (
    <div>
      <h2 className="card-header">
        {profileId ? `${profile.name}'s` : 'Your'} itineraries...
      </h2>

      {userItineraries.length > 0 ? (
        userItineraries.map((itinerary) => (
          <div key={itinerary.id}>
            <p>Title: {itinerary.title}</p>
            <p>Description: {itinerary.description}</p>
          </div>
        ))
      ) : (
        <p>No itineraries to display.</p>
      )}

         {/* Display skills 
      {profile.skills?.length > 0 && (
        <SkillsList skills={profile.skills} isLoggedInUser={!profileId && true} />
      )}*/}
      
      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        {/* <SkillForm profileId={profile._id} /> */}
      </div>
    </div>
  );
};

export default Profile;