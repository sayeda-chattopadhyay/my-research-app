// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import About from './pages/About';
import Research from "./pages/research/Research";
import ResearchDetails from "./pages/researchdetails/ResearchDetails";
// import Publications from './pages/Publications';
// import Team from './pages/Team';
// import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/research" element={<Research />} />
        <Route
          path="/researchdetails/:projectId"
          element={<ResearchDetails />}
        />
        {/* <Route path="/publications" element={<Publications />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">

//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
