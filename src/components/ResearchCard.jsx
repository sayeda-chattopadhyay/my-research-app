// src/components/ResearchCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ResearchCard = ({ research }) => {
  return (
    <div className="border rounded-md overflow-hidden shadow-md bg-white">
      <Link to={`/researchDetails/${research.id}`}>
        <img
          src={research.image}
          alt={research.title.en} // Use English title as alt text
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{research.title.en}</h2>
          <p className="text-gray-700">{research.description.en}</p>
        </div>
      </Link>
    </div>
  );
};

export default ResearchCard;
