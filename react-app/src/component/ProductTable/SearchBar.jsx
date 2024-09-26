import React from 'react';

const SearchBar = ({  }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={}
        />
      <label>
        <input
          type="checkbox"
        />
        Only show products in stock
      </label>
    </div>
  );
};

export default SearchBar;
