import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchForm from '../Search/SearchForm';
import Col from '../Col';
import Card from '../Card';
import Row from '../Row';
import property from '../API';
import PropertyDetail from '../propertyDetail';


const ProfileList = ({ profiles, title }) => {

  const [city, setCity] = useState('');
  const [listing, setListing] = useState();
  const [homes, setHomes] = useState([]);

  const query = {
    city: city,
  }

  const searchProperty = async () => {
    const response = await property(query)
    setListing(response)
    setHomes(response.data.homes);
  }

  const handleInputChange = (e) => setCity(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault()
    query.city = { city }
    console.log(query)
    searchProperty(query);
  };

  return (
    <div>
      <Row>
        <Col size="md-8">
          <Card heading={'List Of Properties'}>
            {listing ? (
              <PropertyDetail
                list = {homes}
              />
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Card>
        </Col>
        <Col size="md-4">
          <Card heading="Search">
            <SearchForm
              city={city}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default ProfileList;
