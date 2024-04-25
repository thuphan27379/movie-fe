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
        <p style={{ fontSize: "20px" }}>Movie Detail Information:</p>
        <div
          className="detail"
          style={{ display: "flex", flexDirection: "row", paddingTop: "20px" }}
        >
          {/* poster poster_path*/}
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetail?.poster_path}`}
              alt="" //{movieDetail?.title}
              style={{ maxWidth: "365px" }}
            />
          </div>

          {/* detail info */}
          <div
            className="info"
            style={{
              paddingLeft: "30px",
              lineHeight: "3.5",
              maxWidth: "700px",
            }}
          >
            <p>Title: {movieDetail?.title}</p>
            <p>Original Title: {movieDetail?.original_title}</p>
            {/* ? year only */}
            <p>Released On: {movieDetail?.release_date}</p>
            {/* ? */}
            {movieDetail?.genres?.map((genre) => (
              <p key={genre.id}>Genre: {genre.name}</p>
            ))}
            <p>Voted: {movieDetail?.vote_average}</p>
            <p>Popularity: {movieDetail?.popularity}</p>
            {/* ? */}
            {movieDetail?.production_companies?.map((company) => (
              <p key={company.id}>Authors - Company: {company.name}</p>
            ))}
            <p>Overview: {movieDetail?.overview}</p>
            {/* ?! */}
            {movieDetail?.spoken_languages?.map((language) => (
              <p key={language.id}>
                Original Language: {language.english_name}
              </p>
            ))}
            <p>Homepage: {movieDetail?.homepage}</p>
            <p>Video - Trailer: {movieDetail?.video}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
