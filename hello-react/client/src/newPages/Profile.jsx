import React, { useEffect, useState } from 'react'
import { useSwipeable } from "react-swipeable";
import './Profile.css'
import mapIcon from './assets/Icons/map.svg'

import miami from './assets/cityImages/Miami.jpg'
import nyc from './assets/cityImages/NewYorkCity.jpg'
import chicago from './assets/cityImages/Chicago.jpg'
import atlanta from './assets/cityImages/Atlanta.jpg'
import x from './assets/Icons/X.svg'

import Create from '../pages/Create';

function Trip(props) {
    return (
        <div class="tripsItem">
            <div class="profileImageContainer">
                <img class="profileImage zoom" src={props.cityImage}></img>
            </div>
            <div class="profileTripOverview">
                <h1 className='zoom'>{props.city}</h1>
                <h2>{props.date}</h2>
                <p class="profileTripAbout">Add Comments!</p>
            </div>
        </div>
    )
}

function Profile() {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    function CreateTrip() {

        if (modalIsOpen) {
            return (
                <div>
                <div className='createNewTripBlur'>
                </div>
                <div className='createNewTrip'>
                    <div className='createNewTripInterior'>
                        <h1>New Trip</h1>
                        <a className='closeButton' onClick={() => { setModalIsOpen((prevState) => !prevState)}}>
                            <img src={x} className='closeButtonImage'></img>
                        </a>
                        <Create></Create>
                    </div>
                </div>
            </div>
            )
        }
    
        return (
            <>
            </>
        )
    }

    return (
        <>
            <CreateTrip></CreateTrip>
            <div className='profileMain'>
                <div className='profileCategory'>
                    <div className='profileImageContainer'>
                        <img className='profileImage'></img>
                    </div>
                    <div className='profileItem'>
                        <h1>Anthony</h1>
                        <h2>About me!</h2>
                        <p>Hi my name is Anthony, I have a cat and I like to code!</p>
                    </div>
                </div>
                <div className='profileCategory border'>
                    <div class="profileItem">
                        <h2>Location</h2>
                        <p>Miami, Florida</p>
                    </div>
                    <div class="profileItem">
                        <h2>Favorite Foods</h2>
                        <p>Indian</p>
                    </div>
                    <div class="profileItem">
                        <h2>Birthday</h2>
                        <p>Sometime</p>
                    </div>
                    <div class="profileItem">
                        <h2>Total Trips</h2>
                        <p>All</p>
                    </div>
                </div>

                <div className='upcomingTripsContainer'>
                    <h1>Upcoming Trips</h1>
                    <button className='profileButton zoom' onClick={() => { setModalIsOpen((prevState) => !prevState)}}><img src={mapIcon}></img>Plan a New Trip</button>
                </div>


                <div className='tripsContainer border'>
                    <Trip city='New York City' cityImage={nyc} date="Jul 20th - Jul 30th"></Trip>
                    <Trip city='Chicago' cityImage={chicago} date="Sep 25th - Sep 27th"></Trip>
                </div>

                <h1 className='subTitle'>Previous Trips</h1>

                <div className='tripsContainer'>
                    <Trip city='Miami' cityImage={miami} date="June 2023"></Trip>
                    <Trip city='Atlanta' cityImage={atlanta} date="August 2022"></Trip>
                </div>
                <div className='border'></div>
            </div>
        </>
    )
}

export default Profile