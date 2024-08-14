import React, { useState, useEffect, useParams } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "../css/SideBar.css";

// genres list, handleMovieByGenre()
// click on the genre and render movies of that genre,
// get genre id => fetch movie by genre id => render to MGallery
function SideBar() {
  const [genresList, setGenresList] = useState([]); //
  const [movieByGenre, setMovieByGenre] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams(); //
  const navigate = useNavigate();

  // api genres list
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}` //
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); //
      })
      .then((response) => {
        console.log("Genres list:", response.genres);
        setGenresList(response.genres); // genres list
      })
      .catch((err) => console.error(err));
  }, []);

  // movie list by genre
  const handleMovieByGenre = (genreId) => {
    // get movie by genre.id
    // display movie - MGallery
    console.log(genreId);
    fetch(
      `${process.env.REACT_APP_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genreId}` //
    ) // SAI CHO NAY NE
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        console.log("Movies by genre:", response.results);
        setMovieByGenre(response.results); // Update movieByGenre state in parent component
        setSearchParams({ genre: genreId }); //
        navigate(`/?genreId=${genreId}`).then(() => {
          console.log("navigate genre"); //navigate to gallery /// SAI CHO NAY NE
        });
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
          paddingTop: "20px",
          paddingLeft: "10px",
        }}
      >
        {/* genres */}
        <ul id="myMenu">
          <h4>Movie Genres List</h4>

          {genresList?.map((genre) => (
            <li
              style={{ fontSize: "14px", paddingLeft: "20px" }}
              key={genre.id}
              value={genre.id} ///
              onClick={() => {
                handleMovieByGenre(genre.id); //
              }}
            >
              {genre.name}
            </li>
          ))}
        </ul>

        <span>
          <h3>Category</h3>
        </span>
        <ul>
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
          <li>
            <button>Trending</button>
          </li>
          <li>
            <button>In Theaters</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
