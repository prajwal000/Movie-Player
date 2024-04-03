// Import necessary libraries
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import Note from "../components/Note";


const ViewMovies = () => {
  // Extract the id and image from the location state
  const { id, image, title, desc, lang, type, date } = useLocation().state;
const navigate=useNavigate()
  // Construct the URL with the extracted id
  const url = `https://vidsrc.to/embed/movie/${id}`;
  const url2=`https://vidsrc.xyz/embed/movie/${id}`


 
  return (
    <>
      <NavBar />
     <section className="container">

     <div>
     <img src="https://swipefile.com/wp-content/uploads/2022/05/cta-banner-offer-copy.png" 
     alt="" 
     width="100%" 
     height="200px"/>
     </div>
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
     <h5 className="pb-2"> Name : {title} (date) </h5> 
     <div className="pb-2"> language : {lang}</div>
     <div> Description : {desc}</div>
   <div className="text-success py-4">If movie is not present in  server try diffrent server.<br/>
   if movie runs slow change the server.you can also change server inside player
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

export default ViewMovies;
