// App.js
import React from 'react';
import "./styles/App.css";
import Router from "./Routes/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { CurrentPageProvider } from "./context/currentPage";
import Topbar from './components/Topbar';


function App() {
  console.log(process.env.React_APP_API_KEY)
  return (
    <>
   
      <CurrentPageProvider>
        <Router />
      </CurrentPageProvider>
    </>
  );
}

export default App;
