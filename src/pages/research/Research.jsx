// src/pages/Research.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResearchCard from '../../components/ResearchCard';

const Research = () => {
  const [researchList, setResearchList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/research.json');
        setResearchList(response.data);
      } catch (error) {
        console.error('Error fetching research data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Research Page</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {researchList.map((research) => (
            <ResearchCard key={research.id} research={research} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Research;
