import React from 'react';

const SearchContact = ({ searchQuery, onSearchChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Contact"
        value={searchQuery}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchContact;
