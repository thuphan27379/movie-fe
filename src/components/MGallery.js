import React from "react";

import "../css/Gallery.css";
import img5Terre from "../assets/img_5terre.jpg";
import imgMountains from "../assets/img_mountains.jpg";
import imgLights from "../assets/img_lights.jpg";
import imgForest from "../assets/img_forest.jpg";

//
function MGallery() {
  return (
    <>
      <div>
        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="img_5terre.jpg">
              <img src={img5Terre} alt="Cinque Terre" />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="img_forest.jpg">
              <img src={imgForest} alt="Forest" />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="img_lights.jpg">
              <img src={imgLights} alt="Northern Lights" />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <a target="_blank" href="img_mountains.jpg">
              <img src={imgMountains} alt="Mountains" />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>
        </div>

        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default MGallery;
