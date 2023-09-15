import React from 'react';

function PropertyDetail(props) {
  if (!props.list?.length) {
    return null;
  }

  return (
    <div className="text-center">
        {props.list.map((item, index) => (
          <ul>
            <li id={`name-${index}`} key={`name-${index}`}>{item.listing.name}</li>
            <li id={`city-${index}`} key={`city-${index}`}>{item.listing.city}</li>
          </ul>
        ))}
    </div>
  );
}

export default PropertyDetail;
