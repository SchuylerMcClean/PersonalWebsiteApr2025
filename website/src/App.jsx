import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import EndBar from "./components/EndBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
//import Download from "./pages/Download";
//import Contact from "./pages/Contact";
//import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <div>
        <EndBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
