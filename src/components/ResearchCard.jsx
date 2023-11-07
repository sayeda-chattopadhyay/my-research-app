import React from "react";
import { Link } from "react-router-dom";

const ResearchCard = ({ research }) => {
  return (
    <div className="col-sm-6 col-md-4 px-4">
      <Link to={`/researchdetails/${research.id}`} className="card mb-4">
        <div className="overflow-hidden">
          <img
            src={research.image}
            alt={research.title.en} // Use English title as alt text
            className="w-full h-48 object-cover card-img-top"
          />
        </div>
        <div className="p-4 card-body">
          <h2 className="font-bold mb-2 card-title">
            {research.title.en}
          </h2>
          <p className="text-gray-700 card-text">{research.description.en}</p>
        </div>
      </Link>
    </div>
  );
};

export default ResearchCard;
