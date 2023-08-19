import React, { useState } from "react";
import "./Sound.scss";

import PlaceholderImage from "../../../public/assets/images/CoverMusic/placeholder.png"
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Sound({ cover, singer, musicname }) {
  return (
    <div className=" sound">
      <div className="image-container   rounded overflow-hidden ">
      
        <LazyLoadImage
           src={cover}
           placeholderSrc={PlaceholderImage}
           effect="black-and-white"
           height="100%"
           width="100%"
        />
      </div>
      <div className="sound-title">
        <span>{musicname}</span>
        <p>{singer}</p>
      </div>
    </div>
  );
}
