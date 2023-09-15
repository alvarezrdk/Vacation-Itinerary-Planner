import React from 'react';

function PropertyDetail(props) {
  
  if (!props.list?.length) {
    return null;
  } else { console.log(props.list)}

  return (
    <div className="text-center">
        {props.list.map((item, index) => (
          <ul>
            <li id={`nam-${index}`} key={`name-${index}`}>{item.listing.name}</li>
            <li id={`cit-${index}`} key={`city-${index}`}>{item.listing.city}</li>
            <img src={item.listing.contextualPictures[0].picture}></img>
          </ul>
        ))}
    </div>
  );
}

export default PropertyDetail;
