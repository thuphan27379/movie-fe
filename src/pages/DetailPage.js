import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// https://api.themoviedb.org/3/movie/{movie_id}/reviews
// https://api.themoviedb.org/3/movie/{movie_id}/videos
// https://api.themoviedb.org/3/movie/{movie_id}/release_dates
function DetailPage() {
  // poster poster_path, title, authors, description - overview, genres, release_date, vote_average: 6.798 / vote_count: 287, video. popularity, language
  // get movie id
  const params = useParams();
  console.log(params);
  const [movieDetail, setMovieDetail] = useState();

  // api

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        console.log("Movie detail:", response);
        setMovieDetail(response); //json
      })
      .catch((err) => console.error(err));
  }, [params]);

  //
  return (
    <>
      <div style={{ paddingTop: "30px" }}>
        <p>Movie Detail Page</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {/* poster poster_path*/}
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetail?.poster_path}`}
              alt="" //{movieDetail?.title}
            />
          </div>

          {/* detail info */}
          <div>
            <p>Movie Info</p>
            <p>Title: {movieDetail?.title}</p>
            <p>Release Date: {movieDetail?.release_date}</p>
            {/* <p>{movieDetail?.genres}</p> */}
            <p>Voted: {movieDetail?.vote_average}</p>
            <p>Popularity: {movieDetail?.popularity}</p>
            <p>Authors:</p>
            <p>Overview: {movieDetail?.overview}</p>
            <p>Language: {movieDetail?.original_language}</p>
            <p>Homepage: {movieDetail?.homepage}</p>
            <p>Video/trailer: {movieDetail?.video}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
