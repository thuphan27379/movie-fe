import React from "react";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom"; // <Link to="/" component={</>} >  </Link>
import { useNavigate } from "react-router-dom";

import "../css/Gallery.css";

// giat giat khi hover
// click on the backdrop/poster to show detail of movie - detailPage
// search result: by genre, by keyword
function MGallery() {
  const [movieGallery, setMovieGallery] = useState([]);

  const navigate = useNavigate();

  // api, top_rated
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        console.log("Movie gallery:", response.results);
        setMovieGallery(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(movieGallery);

  // movie detail
  // addEventListener("clicked", () => {})
  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  //
  return (
    <>
      <div>
        {/* href */}
        {movieGallery?.map((movie) => (
          <div className="responsive">
            <div className="gallery">
              <button target="_blank" href="/#">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}.jpg`}
                  alt={movie.title}
                  key={movie.id}
                  onClick={() => {
                    handleDetail(movie.id);
                  }}
                />
              </button>
              <div className="desc">{movie?.title}</div>
            </div>
          </div>
        ))}

        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default MGallery;
