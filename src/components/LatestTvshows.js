import React, { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function LatestTvshows() {
  // Create a state variable to store the movie data
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Define an async function to fetch the movie data
    async function fetchLatestMovies() {
      try {
        // Make the API request to fetch the latest movies
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.React_APP_API_KEY}`
        );

        // Update the state with the movie data
        setMovies(response.data.results || []);
      } catch (error) {
        console.error(error);
      }
    }

    // Call the fetchLatestMovies function when the component mounts
    fetchLatestMovies();
  }, []);
  const handleSubmit = (movie) => {
    navigate("/tv", {
      state: {
        id: movie.id,
        image: movie.poster_path,
        title: movie.original_name,
        desc: movie.overview,
        lang: movie.original_language,
        type: movie.media_type,
        date: movie.first_air_date,
      },
    });
  };
  return (
    <>
      <section className="container">
        <h5 className="py-3">Trending TV shows</h5>
        <div className="row ">
          {/* Map through the movies and render each one */}
          {movies.map((movie) => (
            <div className="col-lg-2 my-4 text-center" key={movie.id}>
              <span
                onClick={() => {
                  handleSubmit(movie);
                }}
                className="movie-img"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="mob-img"
                />
              </span>
              <span
                onClick={() => {
                  handleSubmit(movie);
                }}
                className="movie-img"
              >
                <div className="movie_title">{movie.original_name}</div>
              </span>
              <span
                onClick={() => {
                  handleSubmit(movie);
                }}
                className="movie-img"
              >
                <div className="mb-3">
                  <span className="me-5 movie-sub-text">
                    lang: {movie.original_language}
                  </span>{" "}
                  <span className="movie-sub-text ">
                    Date: {movie.release_date}
                    {movie.first_air_date}
                  </span>
                </div>
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default LatestTvshows;
