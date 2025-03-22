import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <span className="material-icons-outlined search-icon">search</span>
      <input
        type="text"
        placeholder="Search Customer by name, phone number, date"
      />
    </div>
  );
};

export default SearchBar;