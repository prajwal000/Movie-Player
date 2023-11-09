import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import TrendingMovie from "../components/TrendingMovies";
import LatestMovies from "../components/LatestMovies";
import LatestTvshows from "../components/LatestTvshows";
import axios from "axios";

function Home() {
  return (
    <>
      <NavBar />

      <TrendingMovie />
      <LatestMovies />
      <LatestTvshows />
    </>
  );
}

export default Home;
