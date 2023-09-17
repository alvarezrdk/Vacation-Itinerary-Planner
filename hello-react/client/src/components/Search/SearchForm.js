import React from 'react';

function SearchForm(props) {
  return (
    <form
      className="tripModalForm"
    >
      <div className='modalFormContainer'>
        <div className='modalFormInputContainer'>
          <label>Destination</label>
          <input
            onChange={props.handleInputChange_city}
            value={props.city}
            name="search"
            type="text"
            className="form-control modalFormInput"
            id="city"
          />
        </div>
        <div className='modalFormInputContainer'>
          <label>Start Date</label>
          <input
            onChange={props.handleInputChange_startDate}
            value={props.startDate}
            name="search"
            type="date"
            className="form-control modalFormInput"
            placeholder="Start Date"
            id="startDate"
          />
        </div>
        <div className='modalFormInputContainer'>
          <label>End Date</label>
          <input
            onChange={props.handleInputChange_endDate}
            value={props.endDate}
            name="search"
            type="date"
            className="form-control modalFormInput"
            placeholder="End Date"
            id="endDate"
          />
        </div>
        <div className='modalFormInputContainer'>
          <label>Number of Guests</label>
          <input
            onChange={props.handleInputChange_people}
            value={props.people}
            name="search"
            type="number"
            className="form-control modalFormInput"
            placeholder="How Many People"
            id="people"
          />
        </div>
        <div className="modalFormInputContainer">
        <button
          onClick={props.handleFormSubmit}
          className="modalFormInputButton"
          type="submit"
        >
          Search
        </button>
      </div>
      </div>
      <div>
      </div>
    </form >
  );
}

export default SearchForm;


