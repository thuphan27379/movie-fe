import React from "react";
import MSlider from "../components/MSlider";
import MGallery from "../components/MGallery";
import "../css/Breadcrumb.css";

// Outlet: MAIN CONTENT
function HomePage() {
  // click on the backdrop/poster to show detail of movie - detailPage
  // get movie id, fetch movie detail by id
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", paddingTop: "30px" }}
      >
        {/* Breadcrumb */}
        <div>
          <ul
            class="breadcrumb"
            style={{
              display: "flex",
              flexDirection: "row",
              float: "left",
              paddingTop: "10px",
              padding: "5px",
            }}
          >
            <li>
              <button href="/#">Home</button>
            </li>
            <li>
              <button href="/#">Movie</button>
            </li>
            <li>
              <button href="/#">Detail</button>
            </li>
          </ul>
        </div>

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

        {/* pagination */}
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="pagination"
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button href="/#">&laquo;</button>
            <button href="/#">1</button>
            <button className="active" href="/#">
              2
            </button>
            <button href="/#">3</button>
            <button href="/#">4</button>
            <button href="/#">5</button>
            <button href="/#">6</button>
            <button href="/#">&raquo;</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
