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
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AdminHome from "../Admin/pages/AdminHome"

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
          <Route path="/signin" Component={Login} exact />
          <Route path="/signup" Component={SignUp} exact />


          //admin routinng
          <Route path="/admin/home" Component={AdminHome} exact />

        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default Router;
