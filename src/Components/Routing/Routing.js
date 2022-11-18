import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Routing;
