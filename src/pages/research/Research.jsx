// src/pages/Research.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import ResearchCard from "../../components/ResearchCard";
import Breadcrumb from "../../components/BreadCrumb";

const Research = () => {
  const [researchList, setResearchList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/research.json");
        setResearchList(response.data);
      } catch (error) {
        console.error("Error fetching research data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const paths = [
    { name: "Home", path: "/" },
    { name: "Research", path: "/research" },
  ];

  return (
    <div className="container mt-5 pt-5">
      <Breadcrumb paths={paths} />
      <div className="container-lg px-4 bg-light">
        <h1 className="my-5 py-5 text-center">Our Research</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="row g-5">
            {researchList.map((research, index) => (
              <ResearchCard key={index} research={research} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Research;
