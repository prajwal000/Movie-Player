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
    {process.env.NODE_ENV === "production" && (
      <script src="https://alwingulla.com/88/tag.min.js" data-zone="60427" async data-cfasync="false"></script>
    )}
      <CurrentPageProvider>
        <Router />
      </CurrentPageProvider>
    </>
  );
}

export default App;
