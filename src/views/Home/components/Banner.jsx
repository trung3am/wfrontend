import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const banner = {
    image: "https://trung-img-server.herokuapp.com/61a83a1643a0b417dd6abf87",
    title: "Awsome Collection",
    text:
      "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,ipsam, eligendi, in quo sunt possimus non incidunt odit veroaliquid similique quaerat.",
    link: "/all",
  };
  return (
    <div className="container main-banner-container my-4">
      <div className="main-banner-content">
        <div className="main-banner-text">
          <h4 className="display-4 main-banner-title">{banner.title}</h4>
          <p className="lead">{banner.text}</p>
          <p>
            <NavLink className="btn btn-primary btn-lg" to={banner.link} exact>
              Shop Now
            </NavLink>
          </p>
        </div>
        <img
          className="main-banner-image"
          src={banner.image}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Banner;
