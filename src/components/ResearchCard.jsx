// src/components/ResearchCard.jsx
import React from "react";
import { Link } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ResearchCard = ({ research }) => {
  return (
    <Row>
      <Col xs={6} md={4} >
        <Link to={`/researchdetails/${research.id}`}>
          <img
            src={research.image}
            alt={research.title.en} // Use English title as alt text
            className="w-full h-40 object-cover card-img-top"
          />
          <div className="p-4 card-body">
            <h2 className="text-xl font-bold mb-2 card-title">
              {research.title.en}
            </h2>
            <p className="text-gray-700 card-text">{research.description.en}</p>
          </div>
        </Link>
      </Col>
    </Row>
  );
};

export default ResearchCard;
