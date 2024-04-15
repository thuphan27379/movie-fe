import * as React from "react";
import "../css/Header.css";
import "../css/Pagination.css";

// chinh lai css
/* Toggle between adding and removing the "responsive" class to header when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("header");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
}

function MainHeader() {
  //
  return (
    <>
      <div>
        <div
          className="header"
          id="header"
          style={{ maxHeight: "70px", fontSize: "40px" }}
        >
          <p target="#" index className="logo" style={{ fontSize: "25px" }}>
            Movie App
          </p>

          {/* chinh hoai k dc */}
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
              fontSize: "18px",
            }}
          >
            <button target="/">About</button>
            <button target="/">Movie</button>
            <button target="/">TV Series</button>
            <button target="/">Account</button>
            <button
              href="javascript:void(0);"
              className="icon"
              onClick={() => myFunction()}
            >
              <i class="fa fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
