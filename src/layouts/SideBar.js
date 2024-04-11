import React, { useEffect } from "react";
import "../css/SideBar.css";

// genres list, handleMovieByGenre()
// click on the genre and render movies of that genre,  get genre id => fetch movie by genre id => render to MGallery
function SideBar() {
  const [genresList, setGenresList] = React.useState([]);

  // api genre list
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
          <button>Movie Genres List</button>
          {genresList?.map((genre) => (
            <li
              key={genre.id}
              style={{ fontSize: "14px", paddingLeft: "20px" }}
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
