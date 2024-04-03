import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Banner = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      async function fetchLatestMovies() {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.React_APP_API_KEY}`
          );
  
          setMovies(response.data.results || []);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchLatestMovies();
    }, []);

    const handleSubmit = (movie) => {
      navigate("/view", {
        state: {
          id: movie.id,
          image: movie.poster_path,
          title: movie.original_title,
          desc: movie.overview,
          lang: movie.original_language,
          date: movie.release_date,
        },
      });
    };

    return (

      <div className='pb-3 '>
      <Carousel controls={false}>
        {movies.map((movie) => (
          <Carousel.Item key={movie.id} interval={2000} >
            <div className='container'>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="banner-img"
            />
            </div>
            <Carousel.Caption>
            <h3>{movie.title} </h3>
            {movie.release_date.slice(0,4)}
            <div>
            <button className='primary-btn' 
            onClick={() => {
                handleSubmit(movie);
              }}
            >Watch Now</button>
            </div>
           
          </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
    );
}

export default Banner;
