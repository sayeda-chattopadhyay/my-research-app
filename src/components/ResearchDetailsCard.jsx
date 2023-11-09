import React from "react";

const ResearchDetailsCard = ({ research }) => {
  return (
    <div className="container my-4 p-4">
      <div className="row px-5">
        <div className="col-4 overflow-hidden border">
          <img
            src={research.image}
            alt={research.title.en} // Use English title as alt text
            className="w-full h-48 object-cover card-img-top"
          />
        </div>
        <div className=" col-8 p-4 border">
          <h2 className="font-bold mb-2 card-title">{research.title.en}</h2>
          <p className="text-gray-700 card-text">{research.description.en}</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetailsCard;
