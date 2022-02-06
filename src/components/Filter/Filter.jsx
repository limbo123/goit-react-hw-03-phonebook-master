import React from "react";
import shortid from "shortid";
import propTypes from "prop-types";

const Filter = ({ filter, filterChange }) => {
  const filterInputId = shortid.generate();
  return (
    <>
      <label style={{ display: "block" }} htmlFor={filterInputId}>
        Find contacts by name
      </label>
      <input
        type="text"
        value={filter}
        onChange={filterChange}
        id={filterInputId}
      />
    </>
  );
};

Filter.propTypes = {
  filter: propTypes.string,
  filterChange: propTypes.func,
};

export default Filter;
