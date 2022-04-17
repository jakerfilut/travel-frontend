import React, { useState } from "react";

function SearchBar({ coords, setCoords, setType }) {
  function handleChange(value) {
    console.log(value);
  }

  return (
    <div>
      <select onChange={() => handleChange()} name="selectList" id="selectList">
          <option value="restaurants">Restaurants</option> {" "}
        <option value="hotels">Hotels</option>
        <option value="attractions">Attractions</option>
      </select>
    </div>
  );
}

export default SearchBar;
