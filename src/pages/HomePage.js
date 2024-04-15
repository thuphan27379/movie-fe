import React from "react";
import MSlider from "../components/MSlider";
import MGallery from "../components/MGallery";
import "../css/Breadcrumb.css";

// Outlet: MAIN CONTENT
function HomePage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "30px",
          // marginLeft: "240px",
        }}
      >
        {/* Breadcrumb */}

        {/* carousel */}
        <div>
          <h3>Trending</h3>
          <MSlider />
        </div>

        {/* gallery, search result */}
        <div>
          <h3>Gallery</h3>
          <MGallery />
        </div>
      </div>
    </>
  );
}

export default HomePage;
