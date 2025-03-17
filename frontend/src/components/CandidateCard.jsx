import React from 'react';
import { Card } from 'react-bootstrap';
import { useDrag } from 'react-dnd';
import ScoreStars from './ScoreStars';

const CandidateCard = ({ candidate, interviewStepId }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'candidate',
    item: { 
      candidateId: candidate.id, 
      fullName: candidate.fullName,
      currentStep: candidate.currentInterviewStep,
      averageScore: candidate.averageScore
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <Card 
      ref={drag} 
      className="mb-2 shadow-sm" 
      style={{ 
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }}
    >
      <Card.Body>
        <Card.Title>{candidate.fullName}</Card.Title>
        <ScoreStars score={candidate.averageScore} />
      </Card.Body>
    </Card>
  );
};

export default CandidateCard; 