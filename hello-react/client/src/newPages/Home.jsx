import React, { useEffect, useState } from 'react'
import './Home.css'
import sanFran from './assets/cityImages/SanFran.jpg'
import miami from './assets/cityImages/Miami.jpg'
import nyc from './assets/cityImages/NewYorkCity.jpg'
import chicago from './assets/cityImages/Chicago.jpg'
import atlanta from './assets/cityImages/Atlanta.jpg'
import planeTravel from './assets/Icons/planeTravel.png'

import { useSwipeable } from "react-swipeable";

function Home() {
    if (window.innerWidth < 601) {
        return (
            <>
                <div className='featureMain'>
                    <div className='featureGradient'>
                        <div className='featureText'>
                            <h1>
                                Unlock your lifetime dream destinations and let your adventures begin.
                            </h1>
                            <p>
                                Discover, plan, and book your perfect getaway effortlessly with Lifetimes, your all-in-one travel companion.
                            </p>
                            <button>
                                Explore Cities
                            </button>
                            <button className='buttonLight'>
                                Download Now
                            </button>
                        </div>
                    </div>
                    <img className='featureImage' src={sanFran}>
                    </img>
                </div>
                <div className='colorBlock'>

                </div>
                <div className='suggestedTripsSection'>
                    <img src={planeTravel} className='planeTravel'></img>
                    <h1>Suggested Destinations</h1>
                    <div className='suggestedTrips'>

                        <Carousel>
                            <CarouselItem>
                                <SuggestedTrip image={nyc} city="New York City"></SuggestedTrip>
                            </CarouselItem>
                            <CarouselItem>
                                <SuggestedTrip image={chicago} city="Chicago"></SuggestedTrip>
                            </CarouselItem>
                            <CarouselItem>
                                <SuggestedTrip image={atlanta} city="Atlanta"></SuggestedTrip>
                            </CarouselItem>
                            <CarouselItem>
                                <SuggestedTrip image={miami} city="Miami"></SuggestedTrip>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
                <div className="quote">
                    <h1>
                        "Travel is the gateway to endless discovery, where every journey enriches the soul with new perspectives and unforgettable experiences."
                    </h1>
                    <h2>
                        — Aquila Veritas
                    </h2>
                </div>

            </>
        )
    } else
        return (
            <>
                <div className='featureMain'>
                    <div className='featureGradient'>
                        <div className='featureText'>
                            <h1>
                                Unlock your lifetime dream destinations and let your adventures begin.
                            </h1>
                            <p>
                                Discover, plan, and book your perfect getaway effortlessly with Lifetimes, your all-in-one travel companion.
                            </p>
                            <button>
                                Explore Cities
                            </button>
                            <button className='buttonLight'>
                                Download Now
                            </button>
                        </div>
                    </div>
                    <img className='featureImage' src={sanFran}>
                    </img>
                </div>
                <div className='colorBlock'>

                </div>
                <div className='suggestedTripsSection'>
                    <img src={planeTravel} className='planeTravel'></img>
                    <h1>Suggested Destinations</h1>
                    <div className='suggestedTrips'>
                        <SuggestedTrip image={nyc} city="New York City"></SuggestedTrip>
                        <SuggestedTrip image={chicago} city="Chicago"></SuggestedTrip>
                        <SuggestedTrip image={atlanta} city="Atlanta"></SuggestedTrip>
                        <SuggestedTrip image={miami} city="Miami"></SuggestedTrip>
                    </div>
                </div>
                <div className="quote">
                    <h1>
                        "Travel is the gateway to endless discovery, where every journey enriches the soul with new perspectives and unforgettable experiences."
                    </h1>
                    <h2>
                        — Aquila Veritas
                    </h2>
                </div>
            </>
        );
}

function SuggestedTrip(props) {

    return (
        <div className='suggestedTrip'>
            <div className="suggestedTripCard zoom">
                <img className="suggestedTripImage" src={props.image}></img>
                <h2>{props.city}</h2>
            </div>
        </div>
    )

}


export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (
        <div
            {...handlers}
            className="carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div
                className="inner"
                style={{ transform: `translateX(-${activeIndex * 110}%)` }}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
        </div>
    );
};

export default Home