import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {" "}
      this is Home page
      <Link to="/research">Research</Link>
    </div>
  );
};

export default Home;
