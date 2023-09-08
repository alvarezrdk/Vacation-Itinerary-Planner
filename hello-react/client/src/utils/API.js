import axios from 'axios';

// const search = async (query) =>
//   axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${query}&rating=pg`);

// export default { search };

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://airbnb-search.p.rapidapi.com/property/search',
  params: {
    query: 'New York, NY'
  },
  headers: {
    'X-RapidAPI-Key': 'ef0bd9f482msh63afeccd9f08d96p14e2f6jsn88cf7f9d5d03',
    'X-RapidAPI-Host': 'airbnb-search.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}