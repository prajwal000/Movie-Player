import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useCurrentPage } from "../context/currentPage";
import Topbar from "../components/Topbar";

function TopIMDB() {
  const [movies, setMovies] = useState([]);
  const { currentPage, setCurrentPage } = useCurrentPage();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=3a180f67541b49966efaac81d4fd5ef6&page=${currentPage}`
      );

      setMovies(response.data.results || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (movie) => {
    console.log(movie);
    navigate("/view", {
      state: {
        id: movie.id,
        image: movie.poster_path,
        title: movie.original_title,
        desc: movie.overview,
        lang: movie.original_language,
        type: movie.media_type,
        date: movie.release_date,
      },
    });
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <NavBar />
      <section className="container">
        <h5 className="py-3">Top IMDB Rated Movies</h5>
        <div className="row">
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
                <div className="movie_title">{movie.original_title}</div>
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
                  </span>
                  <span className="movie-sub-text ">
                    Date: {movie.release_date}
                    {movie.first_air_date}
                  </span>
                </div>
              </span>
            </div>
          ))}
        </div>
        <div className="pagination ">
          <button onClick={prevPage} className="page-btn">
            Prev
          </button>
          <span className="page-number">{currentPage}</span>
          <button onClick={nextPage} className="page-btn">
            Next
          </button>
        </div>
      </section>
    </>
  );
}

export default TopIMDB;
