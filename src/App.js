import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global.styled";

import Home from "./pages/Home";
import About from "./pages/about";
import Research from "./pages/research/Research";
import ResearchDetails from "./pages/researchdetails/ResearchDetails";
import Publications from "./pages/publications/Publications";
import NewsAndUpdates from "./pages/news/NewsAndUpdates";

import BaseLayout from "./components/BaseLayout";

const theme = {
  colors: {
    body: "#0070f3",
    text: "#000",
  },
  mobile: "768px",
  tablet: "987px",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/news" element={<NewsAndUpdates />} />
            <Route
              path="/researchdetails/:projectId"
              element={<ResearchDetails />}
            />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
