import "./styles/App.css";
import Router from "./Routes/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import { CurrentPageProvider } from "./context/currentPage";

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
