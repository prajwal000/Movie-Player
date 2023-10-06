import React from "react";
import NavBar from "../components/Navbar";
import TrendingMovie from "../components/TrendingMovies";
import LatestMovies from "../components/LatestMovies";
import LatestTvshows from "../components/LatestTvshows";
import Topbar from "../components/Topbar";

function Home() {
  return (
    <>
      <Topbar />
      <NavBar />

      <TrendingMovie />
      <LatestMovies />
      <LatestTvshows />
    </>
  );
}

export default Home;
