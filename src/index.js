import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import  ReactGA from "react-ga4";
ReactGA.initialize("G-4F9HXNWT02");

ReactGA.send({
    hitType:"pageview",
    page:window.location.pathname,

});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);