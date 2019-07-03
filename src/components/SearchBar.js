import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

<label>
        <strong>Sort:</strong>
        <select onChange={props.sortBy}>
          <option value="Alphabetically">Alphabetically</option>
          <option value="Price">Price</option>
        </select>
      </label>
      <br/>

     
      <label>
        <strong>Filter:</strong>
        <select onChange={props.handleChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
