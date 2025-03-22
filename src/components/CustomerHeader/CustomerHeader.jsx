import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './CustomerHeader.css';

const CustomerHeader = () => {
  return (
    <div className="customer-header">
      <h1>Customer</h1>
      <SearchBar />
    </div>
  );
};

export default CustomerHeader;