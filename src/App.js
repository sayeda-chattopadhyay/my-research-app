// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Research from "./pages/research/Research";
import ResearchDetails from "./pages/researchdetails/ResearchDetails";
import Publications from "./pages/publications";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route
          path="/researchdetails/:projectId"
          element={<ResearchDetails />}
        />
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </Router>
  );
};

export default App;
