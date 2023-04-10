import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routingArray } from "./Services/constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routingArray.map((curElem) => {
          return <Route path={curElem.path} element={curElem.element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
