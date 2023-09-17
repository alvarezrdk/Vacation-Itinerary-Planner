import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_EX_TO_ITINERARY } from '../utils/mutations';
import Auth from '../../utils/auth';

const Create = ({ }) => {
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(0);

  const [createEx, { error }] = useMutation(ADD_EX_TO_ITINERARY);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await createEx({
        variables: { name: name, location: location, date: date, time: time, guests: parseInt(guests) },
      });
      console.log(data)

      setLocation('');
      setName('');
      setDate('');
      setTime('');
      setGuests(0);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4> Add an experince to your trip itinerary!</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Where you headed?"
              value={name}
              className="form-input w-100"
              onChange={(event) => setName(event.target.value)}
            />
             <input
              placeholder="When does it start?"
              value={location}
              className="form-input w-100"
              onChange={(event) => setLocation(event.target.value)}
            />
             <input
              placeholder="When does it end?"
              value={date}
              className="form-input w-100"
              onChange={(event) => setDate(event.target.value)}
            />
             <input
              placeholder="When does it end?"
              value={time}
              className="form-input w-100"
              onChange={(event) => setTime(event.target.value)}
            />
             <input
              placeholder="Just you, or do you not have any friends?"
              value={guests}
              className="form-input w-100"
              onChange={(event) => setGuests(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Add experince!
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
          You need to be logged in to add experinces to your trip itinerary. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default Create;
