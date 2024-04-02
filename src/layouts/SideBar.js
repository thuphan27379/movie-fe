import React from "react";
import "../css/SideBar.css";

//
function SideBar() {
  return (
    <>
      <div
        className="sidebar"
        style={{
          minWidth: "240px",
          paddingTop: "50px",
        }}
      >
        <span>
          <h3>Category</h3>
        </span>
        <ul id="myMenu">
          <li>
            <button>Genres</button>
          </li>
          <li>
            <button>Favorite Movie</button>
          </li>
          <li>
            <button>Favorite TV</button>
          </li>
          <li>
            <button>Watch List</button>
          </li>
          <li>
            <button>Now Playing</button>
          </li>
          <li>
            <button>Popular</button>
          </li>
          <li>
            <button>Top Rated</button>
          </li>
          <li>
            <button>Upcoming</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideBar;
