import React, { useEffect, useState } from "react";

import "../css/Carousel.css";

// authors, description, title, genres
function MSlider() {
  const [movieList, setMovieList] = useState();

  // api
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((response) => setMovieList(response.results))
      .catch((err) => console.error(err));
  }, []);

  console.log(movieList, "movie list");

  // slide
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }
  console.log(slideIndex);

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    console.log(slideIndex);

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  console.log(slideIndex);

  //
  return (
    <>
      <div>
        {/* <h1>slider</h1> */}
        <div className="slideshow-container">
          {movieList?.map((movie, index) => (
            <div className="mySlides fade">
              <img
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}.jpg`}
                alt={movie.title}
                style={{ width: "100%" }}
              />
              <div className="text">{movie.title}</div>
            </div>
          ))}

          <button className="prev" onClick={() => plusSlides(-1)}>
            &#10094;
          </button>
          <button className="next" onclick={() => plusSlides(1)}>
            &#10095;
          </button>
        </div>

        <div style={{ textAlign: "center" }}>
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
        </div>
      </div>
    </>
  );
}

export default MSlider;
