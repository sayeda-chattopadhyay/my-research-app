// src/pages/ResearchDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ResearchDetailsCard from "../../components/ResearchDetailsCard";
import { StyledSection } from "../../components/styles/Section.styled";
import Breadcrumb from "../../components/BreadCrumb";

const ResearchDetails = () => {
  const { projectId } = useParams();
  const [research, setResearch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/research.json");
        const selectedResearch = response.data.find(
          (item) => item.id === parseInt(projectId, 10)
        );

        if (selectedResearch) {
          setResearch(selectedResearch);
        }
      } catch (error) {
        console.error("Error fetching research details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [projectId]);

  const paths = [
    { name: "Home", path: "/" },
    { name: "Research", path: "/research" },
    { name: "Research Details", path: `/research/${projectId}` },
  ];

  return (
    <>
      <StyledSection>
        <Breadcrumb paths={paths} />
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : research ? (
            <div className="row g-5">
              <ResearchDetailsCard research={research} />
            </div>
          ) : (
            <p>Research not found.</p>
          )}
        </div>
      </StyledSection>
    </>
  );
};

export default ResearchDetails;
