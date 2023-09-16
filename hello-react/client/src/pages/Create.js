
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_SKILL } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Create = ({ profileId }) => {
  const [skill, setSkill] = useState('');

  const [createItinerary, { error }] = useMutation(CREATE_ITINERARY);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await createItinerary({
        variables: { profileId, skill },
      });

      setSkill('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Endorse some more skills below.</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Where to?"
              value={skill}
              className="form-input w-100"
              onChange={(event) => setSkill(event.target.value)}
            />
             <input
              placeholder="Start Date"
              value={skill}
              className="form-input w-100"
              onChange={(event) => setSkill(event.target.value)}
            />
             <input
              placeholder="End Date"
              value={skill}
              className="form-input w-100"
              onChange={(event) => setSkill(event.target.value)}
            />
             <input
              placeholder="Number of People"
              value={skill}
              className="form-input w-100"
              onChange={(event) => setSkill(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Create your perfect trip itinerary
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to create an itinerary. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default Create;

