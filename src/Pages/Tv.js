// Import necessary libraries
import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/Navbar";
import Topbar from "../components/Topbar";

const Tv = () => {
  // Extract the id and image from the location state
  const { id, image, title, desc, lang, type, date } = useLocation().state;

  // Construct the URL with the extracted id
  const url = `https://vidsrc.to/embed/tv/${id}`;

  return (
    <>
      <Topbar />
      <NavBar />
      <section className="container">
        <h4 className="py-5 text-center">{title}</h4>
        <div className="row">
          <div className="col-lg-8">
            <div>
              <iframe
                className="vid-player"
                src={url}
                title={`Movie ${id}`}
                width="100%"
                height="500px"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center">
              <img
                src={`https://image.tmdb.org/t/p/w500${image}`}
                alt="Movie Poster"
                width="330px"
              />
            </div>
          </div>
        </div>
        <div className="row mt-5 d-flex align-items-center">
          <div className="col-lg-2">
            <img
              src={`https://image.tmdb.org/t/p/w500${image}`}
              alt="Movie Poster"
              width="200px"
            />
          </div>
          <div className="col-lg-6 d-flex flex-column gap-3 my-2 ">
            <div>Name : {title}</div>
            <div>Language : {lang}</div>
            <div>Release Date: {date}</div>
            <div>Type : {type}</div>
            <div>Description :{desc}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tv;
