// Import necessary libraries
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/Navbar";
import axios from "axios";

const Tv = () => {
  // Extract the id and image from the location state
  const { id, image, title, desc, lang, type, date } = useLocation().state;
  // Construct the URL with the extracted id
  const url = `https://www.vidsrc.to/embed/tv/${id}`;
  //season fetching
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchSeason = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=3a180f67541b49966efaac81d4fd5ef6`
        );

        setMovies(response.data.seasons);
        console.log(movies);
      } catch (error) {}
    };
    fetchSeason();
  }, []);

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
              {title} ({date.slice(0, 4)})
            </h5>
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

export default Tv;
