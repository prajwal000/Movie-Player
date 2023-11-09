import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Topbar from "../components/Topbar";

const Index = () => {
  const [searchMovies, setSearchMovies] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstrun, setFirstRun] = useState(true);
  const navigate = useNavigate();

  const watchMovies = (movie) => {
    if (movie.original_title) {
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
    } else if (movie.original_name) {
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
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const fetchTimer = setTimeout(() => {
      if (!firstrun) {
        if (searchMovies && searchMovies.length > 2) {
          fetchData();
        } else if (searchMovies.length < 1) {
          fetchData();
        }
      }
    }, 100);

    return () => {
      clearTimeout(fetchTimer);
    };
  }, [searchMovies]);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=3a180f67541b49966efaac81d4fd5ef6&query=${searchMovies}`
      );

      setMovies(response.data.results || []);

      setLoading(false);
      setFirstRun(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setFirstRun(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/search", { state: { movies } });
  };
  const home = () => {
    navigate("/home");
  };
  return (
    <>
      <section className="index">
        <div className="index-sec">
          <h1 className="text-center title">
            Watch Your Favourite Movies & Shows for Free
          </h1>
          <form className="form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="searchbar"
              placeholder="Search Movies & Shows"
              value={searchMovies}
              onChange={(e) => setSearchMovies(e.target.value)}
            />
          </form>
          <div className="btn-div">
            <button className="banner-btn" onClick={home}>
              Go To Home
            </button>
          </div>

          <div className="searched">
            <span>
              {loading ? (
                <p className="text-center py-5">Loading...</p>
              ) : (
                <ul>
                  {movies
                    .filter((movie) => movie.poster_path !== null)
                    .sort((a, b) => b.popularity - a.popularity)
                    .map((movie) => (
                      <span
                        className="showcase d-flex"
                        key={movie.id}
                        onClick={() => watchMovies(movie)}
                      >
                        <div className="ps-3">
                          {movie.poster_path && (
                            <img
                              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                              alt=""
                              width="50px"
                            />
                          )}
                        </div>
                        <div className="ps-3 ">
                          <span className="title-name">
                            {movie.original_title || movie.original_name}
                          </span>
                          <div className="sub-items ">
                            <span className="sub-text title-name">
                              {movie.original_language}
                            </span>
                            <span className="sub-text ms-2 title-name">
                              Date: {movie.release_date || movie.first_air_date}
                            </span>
                          </div>
                        </div>
                      </span>
                    ))}
                </ul>
              )}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
