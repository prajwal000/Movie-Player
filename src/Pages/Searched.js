import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";


function Searched() {
  const location = useLocation();
  const { movies } = location.state || { movies: [] };
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    if (data.original_title) {
      navigate("/view", {
        state: {
          id: data.id,
          image: data.poster_path,
          title: data.original_title,
          desc: data.overview,
          lang: data.original_language,
          type: data.media_type,
          date: data.release_date,
        },
      });
    } else if (data.original_name) {
      navigate("/tv", {
        state: {
          id: data.id,
          image: data.poster_path,
          title: data.original_name,
          desc: data.overview,
          lang: data.original_language,
          type: data.media_type,
          date: data.first_air_date,
        },
      });
    }
  };

  return (
    <>
      <NavBar />
      <section className="container py-5">
        <h6 className="mb-5">Your search results</h6>
        <div className="row">
        {
          movies.length===0 ? <>jj</> :<></>
        }
          {
            movies
            .filter((movie) => movie.poster_path !== null)
            .sort((a, b) => b.popularity - a.popularity)
            .map((data) => (
              <div className="col-lg-2 col-6 col-md-3" key={data.id}>
                <div
                  onClick={() => {
                    handleSubmit(data);
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    alt=""
                    width="100%"
                    className="movie-img"
                  />
                </div>

                <div className="pb-3">
                  <div
                    onClick={() => {
                      handleSubmit(data);
                    }}
                  >
                    <div className="pt-3 movie_title">
                      {data.original_name || data.original_title}
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      handleSubmit(data);
                    }}
                  >
                    <div className="mb-3">
                      <span className="me-5 movie-sub-text">
                        lang: {data.original_language}
                      </span>{" "}
                      <span className="movie-sub-text ">
                        Date: {data.release_date || data.first_air_date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Searched;
