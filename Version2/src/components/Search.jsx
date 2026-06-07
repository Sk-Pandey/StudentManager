import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="flex justify-center mt-8 px-4">
      <div className="join w-full max-w-md">
        <input
          type="text"
          placeholder="Search students..."
          className="input input-bordered join-item w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
 
        <button className="btn btn-primary join-item">Search</button>
      </div>
    </div>
  );
};

export default Search;
