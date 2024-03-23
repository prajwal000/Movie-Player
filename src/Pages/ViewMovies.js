import React from "react";
import { useLocation, Link } from "react-router-dom"; // Import Link from react-router-dom
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
        <div className="row pt-3 ">
         <div className="py-5">place for display ads</div>
          <div className="col-lg-9">
          <div>Note : If one server doesnot work please change the server</div>
        <div className="d-flex py-4">
        <div className="movie-links">
        Watch {title} <br/>
        <div className="fw-bold py-2 text-danger">Server 1</div>
        <a href={url} target="_blank" rel="noopener noreferrer links"> <button className="mt-3 nav-button">Click Here</button></a>

        </div>
        <div className="movie-links ms-2">
        Watch {title} <br/>
        <div className="fw-bold py-2 text-success">Server 2</div>
        <a href={url2} target="_blank" rel="noopener noreferrer links"> <button className="mt-3 nav-button">Click Here</button></a>

        </div>
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
