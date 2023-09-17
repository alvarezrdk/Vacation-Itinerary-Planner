import React from 'react';

function PropertyDetail(props) {
  console.log(props);
  const result = props.list;

  if (!props.list?.length) {
    return null;
  } else { 
    console.log(result)
  }

  return (
    <div className="text-center">
        {result.map((item, index) => (
          <ul>
            <li id={`nam-${index}`} key={`name-${index}`}>Property Name: {item.listing.name}</li>
            <li id={`cit-${index}`} key={`city-${index}`}>City: {item.listing.city}</li>
            <li id={`pri-${index}`} key={`price-${index}`}>Price: {item.pricingQuote.structuredStayDisplayPrice.primaryLine.accessibilityLabel}</li>
            <img src={item.listing.contextualPictures[0].picture}></img>
          <button
            onClick={props.handleFormAdd}
            type="submit"
            > Add to Itinerary
          </button>
          </ul>
        ))}
    </div>
  );
}

export default PropertyDetail;
