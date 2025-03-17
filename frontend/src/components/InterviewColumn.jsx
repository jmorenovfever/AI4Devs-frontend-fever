import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { useDrop } from 'react-dnd';
import CandidateCard from './CandidateCard';

const InterviewColumn = ({ step, candidates, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'candidate',
    drop: (item) => onDrop(item, step.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));

  // Filtrar candidatos para esta columna
  const columnCandidates = candidates.filter(
    candidate => candidate.currentInterviewStep === step.name
  );

  return (
    <Col md={4} className="mb-3">
      <Card 
        ref={drop} 
        className={`h-100 ${isOver ? 'bg-light' : ''}`}
      >
        <Card.Header className="text-center">{step.name}</Card.Header>
        <Card.Body style={{ minHeight: '300px' }}>
          {columnCandidates.map((candidate, index) => (
            <CandidateCard 
              key={index} 
              candidate={candidate}
              interviewStepId={step.id}
            />
          ))}
          {columnCandidates.length === 0 && (
            <div className="text-center text-muted mt-4">
              <small>Sin candidatos en esta fase</small>
            </div>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default InterviewColumn; 