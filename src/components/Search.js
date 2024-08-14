import React, { useState, useEffect, useForm } from "react";
import { useSearchParams } from "react-router-dom";
import "../css/Search.css";

// search by name
function Search() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(""); // get input keyword

  // form onSubmit
  const handleInput = (e) => {
    e.preventDefault();
  };

  // onChange
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchParams({ search: value }); //
    setQuery(value); //
  };

  //
  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <form className="example" onSubmit={handleInput}>
          <input
            type="search"
            placeholder="Search a movie.."
            name="search"
            value={query}
            style={{ color: "black", maxHeight: "40px" }}
            onChange={(e) => handleChange(e)} //
          />

          <button
            type="submit"
            style={{ backgroundColor: "black", maxHeight: "40px" }}
          >
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </>
  );
}

export default Search;
