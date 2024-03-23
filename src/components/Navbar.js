import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [searchMovies, setSearchMovies] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstrun, setFirstRun] = useState(true);
  const [requestCount, setRequestCount] = useState(0);
  const navigate = useNavigate();
  const watchMovies = (movie) => {
    setSearchMovies("");
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
    // Add this condition to skip the initial call
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

      // Make separate API calls for movies and TV shows
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=3a180f67541b49966efaac81d4fd5ef6&query=${searchMovies}`
      );

      setMovies(response.data.results || []);
      // Combine the results into a single array

      setLoading(false);
      setFirstRun(false);
      setRequestCount((prevCount) => prevCount + 1);
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
  return (
    <>
      <Navbar expand="lg" className=" py-4 nav-bar">
        <Container>
          <Navbar.Brand className="text-white">
            <Link to="/" className="hd-link">
              Movie Mania
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll " />
          <Navbar.Collapse id="navbarScroll">
            <div className="me-auto">
              <Nav className=" my-lg-0 ps-5 gap-5" navbarScroll>
                <Nav className="text-white ">
                  <Link to="/home" className="link pt-2">
                    HOME
                  </Link>
                </Nav>
                <Nav className="text-white">
                  <Link to="/top-shows" className="link pt-2">
                    TOP IMDB SHOWS
                  </Link>
                </Nav>
                <Nav className="text-white ">
                  <Link to="/top-rated" className="link pt-2">
                    TOP IMDB MOVIES
                  </Link>
                </Nav>
                <Nav className="text-white ">
                  <Link to="/Contact" className="link pt-2">
                    CONTACT
                  </Link>
                </Nav>
                <Nav className="text-white ">
                <Link to="/signin" className="link pt-2">
                  Login
                </Link>
              </Nav>
              </Nav>
            </div>
            <div className="">
              <Nav className=" my-lg-0" navbarScroll>
                <Nav className="text-white ">
                  <form className="form" onSubmit={handleFormSubmit}>
                    <input
                      type="text"
                      className="nav-search"
                      placeholder="Search Movies & Shows"
                      value={searchMovies}
                      onChange={(e) => setSearchMovies(e.target.value)}
                    />
                    <button className="nav-button">search</button>
                  </form>
                </Nav>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="nav-searched ">
        <span>
          {loading ? (
            <p className="text-center py-5">Loading...</p>
          ) : (
            <ul>
              {movies
                .filter((movie) => movie.poster_path !== null) // Filter out movies with null poster_path
                .sort((a, b) => b.popularity - a.popularity) // Sort by popularity in descending order
                .map((movie) => (
                  <div>
                    <span
                      className="showcase d-flex"
                      key={movie.id}
                      onClick={() => watchMovies(movie)}
                    >
                      <div className="ps-3">
                        {movie.poster_path && ( // Check if poster_path is not null
                          <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt=""
                            width="30px"
                          />
                        )}
                      </div>
                      <div className="ps-3">
                        <span className="title-name">
                          {movie.original_title}
                          {movie.original_name}
                        </span>
                        <div className="sub-items">
                          <span className="sub-text title-name">
                            {movie.original_language}
                          </span>
                          <span className="sub-text ms-2 title-name">
                            Date: {movie.release_date}
                            {movie.first_air_date}
                          </span>
                        </div>
                      </div>
                    </span>
                  </div>
                ))}
            </ul>
          )}
        </span>
      </div>
    </>
  );
}

export default NavBar;
