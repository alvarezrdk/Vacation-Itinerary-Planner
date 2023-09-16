import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import Auth from '../utils/auth';

import { CREATE_ITINERARY } from '../utils/mutations';

const Create = ({ profileId }) => {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState('');

  const [createItinerary, { error }] = useMutation(CREATE_ITINERARY);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await createItinerary({
        variables: { profileId, location, startDate, endDate, guests },
      });
      console.log(data)

      setLocation('');
      setStartDate('');
      setEndDate('');
      setGuests('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>

      {/* {Auth.loggedIn() ? ( */}
      <form
        className="modalForm"
        onSubmit={handleFormSubmit}
      >
        <div className="modalFormContainer">
          <div className='modalFormInputContainer'>
            <label>Where To?</label>
            <input
              value={location}
              className="modalFormInput"
              onChange={(event) => setLocation(event.target.value)}
            />
          </div>
          <div className='modalFormInputContainer'>
            <label>How Many Guests</label>
            <input
              type='number'
              value={guests}
              className="modalFormInput"
              onChange={(event) => setGuests(event.target.value)}
            />
          </div>
          <div className='modalFormInputContainer'>
            <label>Departure Date</label>
            <input
              type='date'
              value={startDate}
              className="modalFormInput"
              onChange={(event) => setStartDate(event.target.value)}
            />
          </div>
          <div className='modalFormInputContainer'>
            <label>Return Date</label>
            <input
              type='date'
              value={endDate}
              className="modalFormInput"
              onChange={(event) => setEndDate(event.target.value)}
            />
          </div>
          <div className="">
            <button className="modalFormInputButton" type="submit">
              Create your perfect trip itinerary
            </button>
          </div>
        </div>
        {error && (
          <div className="">
            {error.message}
          </div>
        )}
      </form>
      {/* ) : (
        <p>
          You need to be logged in to create an itinerary. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )} */}
    </div>
  );
};

export default Create;
