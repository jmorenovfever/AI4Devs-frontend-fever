import React from 'react';
import { Row } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import InterviewColumn from './InterviewColumn';

const BoardColumns = ({ interviewSteps, candidates, onCandidateDrop }) => (
  <Row className={isMobile ? 'flex-column' : ''}>
    {interviewSteps.map((step) => (
      <InterviewColumn 
        key={step.id}
        step={step}
        candidates={candidates}
        onDrop={onCandidateDrop}
      />
    ))}
  </Row>
);

export default BoardColumns; 