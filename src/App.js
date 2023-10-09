import React from "react";
import "./styles/App.css";
import Router from "./Routes/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import { CurrentPageProvider } from "./context/currentPage";

function App() {
  const hello = () => {
    debugger;
  };
  hello();
  return (
    <>
      <CurrentPageProvider>
        <Router />
      </CurrentPageProvider>
    </>
  );
}

export default App;
