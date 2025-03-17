import React from 'react';

const ScoreStars = ({ score }) => {
  const maxScore = 5;
  const stars = [];
  
  for (let i = 0; i < maxScore; i++) {
    stars.push(
      <span key={i} className={`text-${i < score ? 'success' : 'muted'}`}>●</span>
    );
  }
  
  return <div>{stars}</div>;
};

export default ScoreStars; 