import React from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import AboutSection from "../components/AboutSection";
import ResearchSection from "../components/ResearchSection";
// import NewsSection from "../components/NewsSection";

const Home = () => {
  return (
    <div>
      {" "}
      <Banner />
      <Features />
      <ResearchSection />
      <AboutSection />
      {/* <NewsSection /> */}
    </div>
  );
};

export default Home;
