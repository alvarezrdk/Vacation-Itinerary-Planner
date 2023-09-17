import axios from 'axios';


async function property(props) {
  const city = props.city.city;
  const checkin = props.startDate.startDate;
  const checkout  = props.endDate.endDate;
  const adults = props.people.people;

  try {
    console.log(city);
    console.log(checkin);
    console.log(checkout);
    console.log(adults);
    const apiFilter = {
      method: 'GET',
      url: 'https://airbnb-search.p.rapidapi.com/property/search',
      params: {
        query: city,
        checkin: checkin,
        checkout: checkout,
        adults: adults
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





