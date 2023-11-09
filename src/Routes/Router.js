import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../Pages/Index";
import Searched from "../Pages/Searched";
import Home from "../Pages/Home";
import ViewMovies from "../Pages/ViewMovies";
import Tv from "../Pages/Tv";
import TopIMDB from "../Pages/TopIMDB";
import TopShows from "../Pages/TopShows";
import Contact from "../Pages/Contact";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Index} exact />
          <Route path="/search" Component={Searched} exact />
          <Route path="/home" Component={Home} exact />
          <Route path="/view" Component={ViewMovies} exact />
          <Route path="/tv" Component={Tv} exact />
          <Route path="/top-rated" Component={TopIMDB} exact />
          <Route path="/top-shows" Component={TopShows} exact />
          <Route path="/contact" Component={Contact} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
