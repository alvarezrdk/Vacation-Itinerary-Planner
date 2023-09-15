import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchForm from '../Search/SearchForm';
import Col from '../Col';
import Card from '../Card';
import Row from '../Row';
import API from '../API';
import PropertyDetail from '../propertyDetail';


const ProfileList = ({ profiles, title }) => {

  const [city, setSearch] = useState('');
  const [listing, setListing] = useState();
  const [homes, setHomes] = useState([]);

  // useEffect(() => {
  //   property('Miami, FL');
  // }, []);

  const searchProperty = async () => {
    const response = await API.property()
    setListing(response)
    setHomes(response.data.homes);
    console.log(homes)


  }

  const handleInputChange = (e) => setSearch(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchProperty();
    console.log(homes)
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
              value={city}
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
