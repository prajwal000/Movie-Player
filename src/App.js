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
   
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-4F9HXNWT02"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4F9HXNWT02');
</script>

        <Router />
      </CurrentPageProvider>
    </>
  );
}

export default App;
