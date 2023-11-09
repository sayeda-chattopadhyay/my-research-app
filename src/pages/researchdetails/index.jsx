import React from "react";
import ResearchDetails from "./ResearchDetails";
import { StyledSection } from "../../components/styles/Section.styled";

const ResearchDetailsPage = () => {
  return (
    <StyledSection>
      <div className="container border">
        <ResearchDetails />
      </div>
    </StyledSection>
  );
};

export default ResearchDetailsPage;
