import React, { useState, useEffect, useForm } from "react";
import "../css/Search.css";
import MGallery from "./MGallery";

// search by keyword
// https://api.themoviedb.org/3/search/keyword
function Search() {
  // const [getMovie, setGetMovie] = useState();

  const [data, setData] = useState([]);
  const [query, setQuery] = useState(""); // get input keyword

  const handleInput = (e) => {
    e.preventDefault();

    console.log(e.target.value);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  // api
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}search/movie?query=${query}?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        console.log("Movie search", response);
        setData(response);
      })
      .catch((err) => console.error(err));
  }, [query]);

  // display result <MGallery/>
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
            onChange={(e) => handleChange(e)}
          />
          <button
            type="submit"
            style={{ backgroundColor: "black", maxHeight: "40px" }}
          >
            <i className="fa fa-search"></i>
          </button>
        </form>

        {/*   {search(data).map((dataObj) => {return ( <MGallery />)} */}
      </div>
    </>
  );
}

export default Search;
