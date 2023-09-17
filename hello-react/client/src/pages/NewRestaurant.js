import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_RESTAURANT_TO_ITINERARY } from '../utils/mutations';
import Auth from '../../utils/auth';

const Create = ({  }) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [reservationDate, setReservationDate] = useState('');
    const [reservationTime, setReservationTime] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [guests, setGuests] = useState(1);

    const [createRestaurant, options] = useMutation(CREATE_ITINERARY);
    const [addRestaurantToItinerary, addRestaurantOptions] = useMutation(ADD_RESTAURANT_TO_ITINERARY);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const addRestaurantData = await createRestaurant({
                variables: { name: name, location: location, cuisine: cuisine, reservationDate: reservationDate, reservationTime: reservationTime, guests: parseInt(guests) },
            });
            console.log(addRestaurantData)

            // const data = await addRestaurantToItinerary({
            //     variables: { itineraryId: itineraryId,  },
            // });
            // console.log(data)
           

            setLocation('');
            setCuisine('');
            setReservationTime('');
            setGuests(1);
            setReservationDate('');
            setName('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h4>Add a restaurant reservation to your trip itinerary!.</h4>

            {Auth.loggedIn() ? (
                <form
                    className="flex-row justify-center justify-space-between-md align-center"
                    onSubmit={handleFormSubmit}
                >
                    <div className="col-12 col-lg-9">
                        <input
                            placeholder="Where are you eating?"
                            value={name}
                            className="form-input w-100"
                            onChange={(event) => setName(event.target.value)}
                        />
                        <input
                            placeholder="Where's the spot?"
                            value={location}
                            className="form-input w-100"
                            onChange={(event) => setLocation(event.target.value)}
                        />
                        <input
                            placeholder="What kind of food do they serve?"
                            value={cuisine}
                            className="form-input w-100"
                            onChange={(event) => setCuisine(event.target.value)}
                        />
                        <input
                            placeholder="What day is the reservation?"
                            value={reservationDate}
                            className="form-input w-100"
                            onChange={(event) => setReservationDate(event.target.value)}
                        />
                        <input
                            placeholder="What time is the reservation?"
                            value={reservationTime}
                            className="form-input w-100"
                            onChange={(event) => setReservationTime(event.target.value)}
                        />
                        <input
                            placeholder="How many in your party?"
                            value={guests}
                            className="form-input w-100"
                            onChange={(event) => setGuests(event.target.value)}
                        />
                    </div>

                    <div className="col-12 col-lg-3">
                        <button className="btn btn-info btn-block py-3" type="submit">
                            Add reservation
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
                    You need to be logged in to add reservations to your itinerary. Please{' '}
                    <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                </p>
            )}
        </div>
    );
};

export default Create;
