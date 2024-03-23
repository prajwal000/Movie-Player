import React, { useEffect } from 'react';
import "./styles/App.css";
import Router from "./Routes/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { CurrentPageProvider } from "./context/currentPage";
import UserInfo from "./users/userInfo"


function App() {
  const { userId} = UserInfo();
  console.log(userId)

  return (
    <>
      <CurrentPageProvider>
        <Router />
      </CurrentPageProvider>
    </>
  );
}

export default App;
