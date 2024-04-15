import React, { useState, useEffect, useParams } from "react";
import "../css/SideBar.css";
import { useSearchParams } from "react-router-dom"; //

// genres list, handleMovieByGenre()
// click on the genre and render movies of that genre,
// get genre id => fetch movie by genre id => render to MGallery
function SideBar() {
  const [genresList, setGenresList] = React.useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams(); //

  // api genres list
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        console.log("Genres list:", response.genres);
        setGenresList(response.genres); //
      })
      .catch((err) => console.error(err));
  }, []);

  // movie list by genre
  const handleMovieByGenre = (genreId) => {
    // get movie by genre.id
    // display movie - MGallery ?!?!
    console.log(genreId);
    fetch(
      `${process.env.REACT_APP_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genreId}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        console.log("Movies by genre:", response.results);
        setMovieByGenre(response.results); // Update movieByGenre state in parent component
        setSearchParams({ genre: genreId });
      })
      .catch((err) => console.error(err));
  };

  //
  return (
    <>
      <div
        className="sidebar"
        style={{
          minWidth: "240px",
          paddingTop: "30px",
          paddingLeft: "10px",
        }}
      >
        <span>
          <h3>Category</h3>
        </span>

        <ul id="myMenu">
          <h5>Movie Genres List</h5>
          {genresList?.map((genre) => (
            <li
              key={genre.id}
              style={{ fontSize: "14px", paddingLeft: "20px" }}
              onClick={() => {
                handleMovieByGenre(genre.id); //
              }}
            >
              {genre.name}
            </li>
          ))}

          <li>
            <button>Movie Certifications</button>
          </li>
          <li>
            <button>Favorite Movie</button>
          </li>
          <li>
            <button>Watch List</button>
          </li>
          <li>
            <button>Now Playing</button>
          </li>
          <li>
            <button>Popular</button>
          </li>
          <li>
            <button>Top Rated</button>
          </li>
          <li>
            <button>Upcoming</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
