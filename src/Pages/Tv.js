// Import necessary libraries
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/Navbar";
import axios from "axios";
import Note from "../components/Note";

const Tv = () => {
  // Extract the id and image from the location state
  const { id, image, title, desc, lang, type, date } = useLocation().state;
  // Construct the URL with the extracted id
  const url = `https://www.vidsrc.to/embed/tv/${id}`;
 const url2=` https://vidsrc.xyz/embed/tv/${id}`
  //season fetching
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchSeason = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.React_APP_API_KEY}`
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

    
     <div className="row py-4">
     <div className="col-lg-3 text-center">
     <img
     src={`https://image.tmdb.org/t/p/w500${image}`}
     alt="Movie Poster"
     width="300px"
     className="poster"
   />
    </div>
     <div className="col-lg-4 py-4">
     <h5 className="pb-2"> Name : {title} ({date.slice(0,4)}) </h5> 
     <div className="pb-2"> language : {lang}</div>
     <div> Description : {desc}</div>
   <div className="text-success py-4">If show is not present in  server try diffrent server.<br/>
   if show runs slow change the server.you can also change server inside player
   </div>
  

      </div>
    <div className="col-lg-5">
  
    <div className="d-flex gap-3 ps-3 py-3">
    <div className="link-1 ">
    <h5 className="fw-bold">Server 1</h5>
   <div className="py-3">
   Vidsrc 1
   </div>
   <a href={url} className="movie-links " target="_blank" rel="noreferrer">
   Click Here
   </a>
    </div>
  
    <div className="link-1">
    <h5 className="fw-bold">Server 2</h5>
   <div className="py-3">
   Vidsrc 2
   </div>
   <a href={url2} className="movie-links "  target="_blank" rel="noreferrer">
   ClickHere
   </a>
 
    
    </div>

    </div>

    </div>
     </div>
     <Note/>
     </section>
    </>
  );
};

export default Tv;
