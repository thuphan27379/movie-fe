import React from "react";
import MSlider from "../components/MSlider";
import MGallery from "../components/MGallery";

// Outlet: MAIN CONTENT
function HomePage() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <h3>Trending</h3>
          <MSlider />
        </div>

        <div>
          <h3>Gallery</h3>
          <MGallery />
        </div>
        <div>
          <p>pagination</p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
