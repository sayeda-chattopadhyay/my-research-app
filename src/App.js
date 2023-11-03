import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Research from "./pages/research/Research";
import ResearchDetails from "./pages/researchdetails/ResearchDetails";
import Publications from "./pages/publications/Publications";
import BaseLayout from "./components/BaseLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route
            path="/researchdetails/:projectId"
            element={<ResearchDetails />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
