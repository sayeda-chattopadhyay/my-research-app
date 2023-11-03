// src/pages/ResearchDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResearchDetails = () => {
  const { projectId } = useParams();
  const [research, setResearch] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/research.json');
        const selectedResearch = response.data.find(
          (item) => item.id === parseInt(projectId, 10)
        );

        if (selectedResearch) {
          setResearch(selectedResearch);
        }
      } catch (error) {
        console.error('Error fetching research details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [projectId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : research ? (
        <div>
          <h2>{research.title.en}</h2>
          <p>{research.description.en}</p>
          <a href={research.link} target="_blank" rel="noopener noreferrer">
            Visit Research Website
          </a>
        </div>
      ) : (
        <p>Research not found.</p>
      )}
    </div>
  );
};

export default ResearchDetails;
