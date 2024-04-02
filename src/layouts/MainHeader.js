import * as React from "react";
// https://www.w3schools.com/howto/howto_css_responsive_header.asp
import "../css/Header.css";

//
function MainHeader() {
  return (
    <>
      <div>
        <div className="header">
          <p target="/" className="logo">
            Movie App
          </p>
          <div className="header-right">
            <button target="/">About</button>
            <button target="/" className="active">
              Movie
            </button>
            <button target="/">TV Series</button>
            <button target="/">Account</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
