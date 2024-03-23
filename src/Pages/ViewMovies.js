// Import necessary libraries
import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/Navbar";


const ViewMovies = () => {
  // Extract the id and image from the location state
  const { id, image, title, desc, lang, type, date } = useLocation().state;

  // Construct the URL with the extracted id
  const url = `https://vidsrc.to/embed/movie/${id}`;
  const url2=`https://vidsrc.xyz/embed/movie/${id}`
  const time = date.slice(0, 4);

  return (
    <>
      <NavBar />
      <section className="container">
        <div className="row pt-3 d-flex align-items-center">
          <div className="py-4 text-center note">
            Note : You can change the server from the player located at top left
            of the player.
          </div>
          <div className="col-lg-9">
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

          <div className="col-lg-3">
            <div className="text-center">
              <img
                src={`https://image.tmdb.org/t/p/w500${image}`}
                alt="Movie Poster"
                width="300px"
                className="poster"
              />
            </div>
          </div>

          <div className="col-lg-5">
            <h5 className="py-3">
              {title} ({time})
            </h5>
            <div className="pb-2">Language: {lang}</div>
            {type ? (
              <>
                <span className="sm-text">Type: {type}</span>
              </>
            ) : (
              <></>
            )}
            <div>Description: {desc}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewMovies;
