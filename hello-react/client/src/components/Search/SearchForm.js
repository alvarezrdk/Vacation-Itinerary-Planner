import React from 'react';

function SearchForm(props) {
  return (
    <form>
      <div>
        <input
          onChange={props.handleInputChange_city}
          value={props.city}
          name="search"
          type="text"
          className="form-control"
          placeholder="Destination"
          id="city"
        />
        <input
          onChange={props.handleInputChange_startDate}
          value={props.startDate}
          name="search"
          type="text"
          className="form-control"
          placeholder="Start Date"
          id="startDate"
        />
        <input
          onChange={props.handleInputChange_endDate}
          value={props.endDate}
          name="search"
          type="text"
          className="form-control"
          placeholder="End Date"
          id="endDate"
        />
        <input
          onChange={props.handleInputChange_people}
          value={props.people}
          name="search"
          type="text"
          className="form-control"
          placeholder="How Many People"
          id="people"
        />
        <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
