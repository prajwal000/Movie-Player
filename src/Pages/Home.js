import React, { useState, useEffect } from 'react';
import NavBar from "../components/Navbar";
import TrendingMovie from "../components/TrendingMovies";
import LatestMovies from "../components/LatestMovies";
import LatestTvshows from "../components/LatestTvshows";
import { useLocation } from "react-router-dom";
import LoginSuccess from '../Modals/LoginSuccess';
import Note from '../components/Note';
import Banner from '../components/Banner';


function Home() {
 const[modalShow,setModalShow]=useState(true);
 const location = useLocation();
    const loginShow = location.state?.loginShow || false;

    useEffect(() => {
        setModalShow(loginShow); // Set modal visibility only once when component mounts
    }, []);

    return (
        <>
            <NavBar />
            <LoginSuccess
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <Banner/>
         
            <TrendingMovie />
            <LatestMovies />
            <LatestTvshows />
            <Note/>
        </>
    );
}

export default Home;
