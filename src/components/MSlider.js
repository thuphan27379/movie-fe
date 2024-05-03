import React, { useEffect, useState } from "react";
import "../css/Carousel.css";

//// giat giat khi hover
function MSlider() {
  const [movieList, setMovieList] = useState([]); //
  const [slideIndex, setSlideIndex] = useState(0);

  // api popular
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        console.log("Movie list:", response.results);
        setMovieList(response.results); //json
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(movieList);

  // slide
  function plusSlides(n) {
    const newIndex = slideIndex + n;
    if (newIndex >= 0 && newIndex < movieList.length) {
      setSlideIndex(newIndex);
    }
  }

  function currentSlide(n) {
    if (n >= 0 && n < movieList.length) {
      setSlideIndex(n);
    }
  }

  //
  return (
    <>
      <div>
        <div className="slideshow-container" style={{ maxWidth: "850px" }}>
          {movieList?.length > 0 && (
            <div className="mySlides fade">
              <div
                className="numbertext"
                style={{
                  fontSize: "30px",
                  paddingTop: "30px",
                  paddingLeft: "20px",
                }}
              >
                {movieList[slideIndex].title}
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieList[slideIndex].backdrop_path}.jpg`}
                alt={movieList[slideIndex].title}
                style={{ width: "100%" }}
                key={movieList[slideIndex].id}
              />
              <div className="text">{movieList[slideIndex].overview}</div>
            </div>
          )}

          <button className="prev" onClick={() => plusSlides(-1)}>
            &#10094;
          </button>
          <button className="next" onClick={() => plusSlides(1)}>
            &#10095;
          </button>
        </div>

        <div style={{ textAlign: "center" }}>
          {movieList?.map((_, index) => (
            <span
              className={`dot ${index === slideIndex ? "active" : ""}`}
              key={index}
              onClick={() => currentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}

export default MSlider;
