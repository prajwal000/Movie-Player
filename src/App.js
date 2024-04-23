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
      <script src="https://eechicha.com/pfe/current/tag.min.js?z=7382998" data-cfasync="false" async></script>
    )}
      <CurrentPageProvider>
        <Router />
      </CurrentPageProvider>
    </>
  );
}

export default App;
