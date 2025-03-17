import React from 'react';
import { Button } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';

const BoardHeader = ({ positionName, onBack }) => (
  <div className="d-flex align-items-center mb-4">
    <Button 
      variant="link" 
      className="p-0 me-3"
      onClick={onBack}
    >
      <BsArrowLeft size={24} />
    </Button>
    <h2 className="mb-0">{positionName}</h2>
  </div>
);

export default BoardHeader; 