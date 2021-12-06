import React from 'react';
import './SearchInput.css';


const SearchInput = ({setCity}) => {

  let cityInput = React.createRef();
  
  const handleSearch = (e) => {
    e.preventDefault();
    setCity(cityInput.current.value);
  }

  return (
    <div className="searchInput">
      <input ref={cityInput} type="text" placeholder="Enter city"/>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchInput;
    
