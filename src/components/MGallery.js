import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"; //
import "../css/Gallery.css";
import PaginationComponent from "./PaginationComponent";

// giat giat khi hover
// click on the backdrop/poster to show detail of movie - detailPage
// search result: by genre, by keyword
function MGallery({ movieByGenre }) {
  const [movieGallery, setMovieGallery] = useState([]);
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams(); //
  const valueQuery = searchParams.get("search"); //
  const valueGenre = searchParams.get("genre");
  const [totalPage, setTotalPage] = useState();

  // api
  useEffect(() => {
    // search by keyword
    let url = `${process.env.REACT_APP_BASE_URL}`;

    if (valueQuery) {
      url += `search/movie?query=${valueQuery}&`;
    } else if (valueGenre) {
      url += `discover/movie?with_genres=${valueGenre}&`;
    } else {
      url += `movie/top_rated?`;
    }

    url += `api_key=${process.env.REACT_APP_API_KEY}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        console.log("Movie", response);
        setMovieGallery(response.results);
        setTotalPage(response.total_pages);
      })
      .catch((err) => console.error(err));
  }, [valueQuery, valueGenre]);

  // else if (movieByGenre.length > 0) {
  // // movie by genre
  // // setMovieGallery(movieByGenre);
  // fetch(
  //   `${process.env.REACT_APP_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genreId}`
  // )
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     return response.json();
  //   })
  //   .then((response) => {
  //     console.log("Movies by genre:", response.results);
  //     setMovieGallery(response.results); //
  //   })
  //   .catch((err) => console.error(err));

  //   else {
  //     // top_rated
  //     // &page=1
  //     fetch(
  //       `${process.env.REACT_APP_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
  //     )
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return response.json();
  //       })
  //       .then((response) => {
  //         console.log("Movie gallery:", response.results);
  //         setMovieGallery(response.results);
  //       })
  //       .catch((err) => console.error(err));
  //   }
  // }, [valueQuery]);

  console.log(movieGallery);

  // movie detail
  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  //
  return (
    <>
      <div>
        {movieGallery?.map((movie) => (
          <div className="responsive">
            <div className="gallery">
              <button target="_blank" href="/#">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}.jpg`}
                  alt={movie.title}
                  key={movie?.id}
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
        <PaginationComponent totalPage={totalPage} />
      </div>
    </>
  );
}

export default MGallery;
