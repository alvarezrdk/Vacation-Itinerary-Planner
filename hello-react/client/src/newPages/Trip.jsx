import React, { useEffect, useState } from 'react'
import './Trip.css'
import caret from './assets/Icons/caret.svg'
import caretRight from './assets/Icons/caretRight.svg'
import miami from './assets/cityImages/Miami.jpg'
import { useParams } from "react-router-dom"
import x from './assets/Icons/X.svg'


// function Trip() { 
//     let { id } = useParams();
// }

import PropertyDetail from '../components/propertyDetail';
import property from '../components/API';
import SearchForm from '../components/Search/SearchForm';
import { loadStripe } from '@stripe/stripe-js';

const Trip = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    //function 
    const CreateTrip = () => {

        const [city, setCity] = useState('');
        const [startDate, setstartDate] = useState(Date);
        const [endDate, setendDate] = useState(Date);
        const [people, setpeople] = useState(Number);
        const [listing, setListing] = useState();
        const [homes, setHomes] = useState();
        
        const query = {
            city: '',
            startDate: '',
            endDate: '',
            people: ''
        }

        const searchProperty = async (query) => {
            const response = await property(query)
            setListing(response)
            console.log(response)
            setHomes(response.data.homes);
            console.log(homes);
        }

        const handleInputChange_city = (e) => setCity(e.target.value);
        const handleInputChange_startDate = (e) => setstartDate(e.target.value);
        const handleInputChange_endDate = (e) => setendDate(e.target.value);
        const handleInputChange_people = (e) => setpeople(e.target.value);


        const handleFormSubmit = (e) => {
            e.preventDefault()
            query.city = { city }
            query.startDate = { startDate }
            query.endDate = { endDate }
            query.people = { people }
            console.log(query)
            searchProperty(query);
        };

        const handleFormBook = (e) => {
            e.preventDefault()

        };

        if (modalIsOpen) {
            return (
                <div>
                    <div className='createNewTripBlur'>
                    </div>
                    <div className='createNewTripAccomodation'>
                        <div className='createNewTripInterior'>
                            <h1>New Accomodations</h1>
                            <a className='closeButton' onClick={() => { setModalIsOpen((prevState) => !prevState) }}>
                                <img src={x} className='closeButtonImage'></img>
                            </a>

                            <SearchForm
                                city={city}
                                handleInputChange_city={handleInputChange_city}
                                startDate={startDate}
                                handleInputChange_startDate={handleInputChange_startDate}
                                endDate={endDate}
                                handleInputChange_endDate={handleInputChange_endDate}
                                people={people}
                                handleInputChange_people={handleInputChange_people}
                                handleFormSubmit={handleFormSubmit}
                            />

                            <div heading={'List Of Properties'}>
                                {listing ? (
                                    <PropertyDetail
                                        list={homes}
                                    />
                                ) : (
                                    <h3>No Results to Display</h3>
                                )}
                            </div>
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


    const MenuMainOverviewItem = (props) => {

        const [active, setActive] = useState(false);
        const [open, setOpen] = useState(false);


        if (active) {
            return (
                <div className='menuMainOverviewItem'>
                    <a href='#' className='menuMainOverviewItemButton' onClick={() => { setOpen((prevState) => !prevState); setActive((prevState) => !prevState) }} >
                        <img src={caret} className='menuMainOverviewIcon'></img>
                    </a>
                    <a>
                        <h1>{props.title}</h1>
                    </a>
                    {open && props.children}
                </div>
            )
        } else

            return (
                <div className='menuMainOverviewItem'>
                    <a href='#' className='menuMainOverviewItemButton' onClick={() => { setOpen((prevState) => !prevState); setActive((prevState) => !prevState) }} >
                        <img src={caretRight} className='menuMainOverviewIcon'></img>
                    </a>
                    <a>
                        <h1>{props.title}</h1>
                    </a>
                    {open && props.children}
                </div>
            )
    }

    const MenuSideBarItem = (props) => {

        const [open, setOpen] = useState(true);
        const [active, setActive] = useState(true);

        if (active) {
            return (
                <div className='menuSideBarItem'>
                    <a href='#' className='menuSideBarIconButton' onClick={() => { setOpen((prevState) => !prevState); setActive((prevState) => !prevState) }} >
                        <img src={caret} className='menuSideBarIcon'></img>
                        <h1>{props.title}</h1>
                    </a>
                    {open && props.children}
                </div>
            )
        } else {

            return (
                <div className='menuSideBarItem'>
                    <a href='#' className='menuSideBarIconButton' onClick={() => { setOpen((prevState) => !prevState); setActive((prevState) => !prevState) }} >
                        <img src={caretRight} className='menuSideBarIcon'></img>
                        <h1>{props.title}</h1>
                    </a>
                    {open && props.children}
                </div>
            )
        }

    }
    return (
        <>
            <CreateTrip></CreateTrip>
            <div className='tripMain'>
                <div className='menuMain'>
                    <div className='menuSideBar'>
                        <div className='menuSideBarAI'>
                            <button className='buttonAI'>AI Personal Assistant</button>
                        </div>
                        <MenuSideBarItem
                            title="Overview"
                        >
                            <a>
                                <p>Restaurants</p>
                            </a>
                            <a>
                                <p>Activities</p>
                            </a>
                            <a>
                                <p>Accomodations</p>
                            </a>
                        </MenuSideBarItem>
                        <MenuSideBarItem
                            title="Itinerary"
                        >
                            <p>Day 1</p>
                            <p>Day 2</p>
                            <p>Day 3</p>
                        </MenuSideBarItem>
                        <MenuSideBarItem
                            title="Budget"
                        >
                            <p>Expenses</p>
                        </MenuSideBarItem>
                    </div>
                    <div className='menuMainInfo'>
                        <div className='menuMainInfoImageContainer'>
                            <img src={miami} className='menuMainInfoImage'></img>
                            <div className='menuMainInfoImageCard'>

                                <h1>Trip To Miami</h1>
                                <p>9/18/9/21</p>

                            </div>
                        </div>
                        <div className='menuMainInfoItemShaded'>
                            <h1 className='menuMainInfoTitle'>Overview</h1>
                        </div>
                        <div className='menuMainInfoItem'>
                            <MenuMainOverviewItem
                                title="Restaurants"
                            >
                                <a>
                                    <p>Restaurants</p>
                                </a>
                            </MenuMainOverviewItem>
                        </div>
                        <div className='menuMainInfoItem'>
                            <MenuMainOverviewItem
                                title="Activities"
                            >
                                <a>
                                    <p>Restaurants</p>
                                </a>
                            </MenuMainOverviewItem>
                        </div>
                        <div className='menuMainInfoItem'>
                            <MenuMainOverviewItem
                                title="Accomodations"
                            >
                                <button className='addNewAccomodationsButton' onClick={() => { setModalIsOpen((prevState) => !prevState) }}>Add New Accomodations</button>

                            </MenuMainOverviewItem>
                        </div>
                        <div className='menuMainInfoItemShaded'>
                            <h1 className='menuMainInfoTitle'>Itinerary</h1>
                        </div>
                        <div className='menuMainInfoItem'>
                            <MenuMainOverviewItem
                                title="Day 1"
                            >
                                <p>9:15 Massage</p>
                                <p>1:00 Lunch</p>
                                <p>3:00 Homework</p>


                            </MenuMainOverviewItem>
                        </div>
                        <div className='menuMainInfoItem'>
                            <MenuMainOverviewItem
                                title="Day 2"
                            >
                                <a>
                                    <p>Restaurants</p>
                                </a>
                            </MenuMainOverviewItem>
                        </div>
                        <div className='menuMainInfoItem'>
                            <MenuMainOverviewItem
                                title="Day 3"
                            >
                                <a>
                                    <p>Restaurants</p>
                                </a>
                            </MenuMainOverviewItem>
                        </div>
                        <div className='menuMainInfoItemShaded'>
                            <h1 className='menuMainInfoTitle'>Budget</h1>
                        </div>
                        <div className='menuMainInfoItem'>
                            <MenuMainOverviewItem
                                title="Breakdown"
                            >
                                <a>
                                    <p>Restaurants</p>
                                </a>
                            </MenuMainOverviewItem>
                        </div>

                    </div>
                </div>
                <div className='overviewMap shadowElement'>

                </div>
            </div>
        </>
    )
    
} 

export default Trip;