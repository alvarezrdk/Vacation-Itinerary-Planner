import axios from 'axios';


async function property(props) {
  const { city } = props.city;

  try {
    console.log(city);
    const apiFilter = {
      method: 'GET',
      url: 'https://airbnb-search.p.rapidapi.com/property/search',
      params: {
        query: city,
      },
      headers: {
        'X-RapidAPI-Key': 'ef0bd9f482msh63afeccd9f08d96p14e2f6jsn88cf7f9d5d03',
        'X-RapidAPI-Host': 'airbnb-search.p.rapidapi.com',
      },
    };

    const response = await axios.request(apiFilter);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default property;





