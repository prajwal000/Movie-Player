// App.js
import React from 'react';
import "./styles/App.css";
import Router from "./Routes/Router";
import { CurrentPageProvider } from "./context/currentPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
 
  return (
    <>
   
      <CurrentPageProvider>
        <Router />
      </CurrentPageProvider>
    </>
  );
}

export default App;
