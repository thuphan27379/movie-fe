import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/Detail.css";

// https://api.themoviedb.org/3/movie/{movie_id}/reviews
// https://api.themoviedb.org/3/movie/{movie_id}/videos
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
        <div
          className="detail"
          style={{ display: "flex", flexDirection: "row", paddingTop: "20px" }}
        >
          {/* poster poster_path*/}
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetail?.poster_path}`}
              alt="" //{movieDetail?.title}
              style={{ maxWidth: "350px" }}
            />
          </div>

          {/* detail info */}
          <div
            className="info"
            style={{
              paddingLeft: "20px",
              lineHeight: "3.5px",
              maxWidth: "700px",
            }}
          >
            <p>Movie Info:</p>
            {/* <br /> */}
            <p>Title: {movieDetail?.title}</p>
            {/* ? year only */}
            <p>Release Date: {movieDetail?.release_date}</p>
            {movieDetail?.genres?.map((genre) => (
              <p key={genre.id}>Genre: {genre.name}</p>
            ))}
            <p>Voted: {movieDetail?.vote_average}</p>
            <p>Popularity: {movieDetail?.popularity}</p>
            {/* ? */}
            <p>Authors - Company: {movieDetail?.production_companies.name}</p>
            <p>Overview: {movieDetail?.overview}</p>
            {/* ! */}
            <p>Language: {movieDetail?.original_language}</p>
            <p>Homepage: {movieDetail?.homepage}</p>
            <p>Video - Trailer: {movieDetail?.video}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
