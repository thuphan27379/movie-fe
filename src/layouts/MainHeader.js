import * as React from "react";
import "../css/Header.css";
import "../css/Pagination.css";

// chinh lai css
function MainHeader() {
  //
  return (
    <>
      <div>
        <div className="header" style={{ maxHeight: "70px" }}>
          <p target="/" className="logo">
            Movie App
          </p>

          <div
            className="header-right"
            style={{
              display: "flex",
              float: "right",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
              lineHeight: 0,
              padding: 0,
              margin: 0,
            }}
          >
            <button target="/">About</button>
            <button target="/">Movie</button>
            <button target="/">TV Series</button>
            <button target="/">Account</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
