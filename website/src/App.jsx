import React from "react";
import { BrowserRouter } from "react-router-dom";
import EndBar from "./components/EndBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <About />
      <Projects />
      <Contact />
      <EndBar />
    </BrowserRouter>
  );
}

export default App;
