import React from "react";

const SearchBar = () => {
  return (
    <input
      type="search"
      id="default-search"
      className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
      required
    />
  );
};

export default SearchBar;
