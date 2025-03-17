import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isMobile } from 'react-device-detect';
import { 
  getPositionInterviewFlow,
  getPositionCandidates,
  updateCandidateStage
} from '../services/positionService';
import { mockInterviewFlow, mockCandidates } from '../data/mockData';
import BoardHeader from './BoardHeader';
import BoardColumns from './BoardColumns';

// Componente principal del tablero de posición
const PositionBoard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [position, setPosition] = useState(null);
  const [interviewSteps, setInterviewSteps] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [useMockData, setUseMockData] = useState(true); // Para desarrollo, usar datos mock

  // Cargar datos iniciales
  useEffect(() => {
    const fetchPositionData = async () => {
      try {
        setLoading(true);
        
        // Usar datos mock o llamar a la API
        if (useMockData) {
          setPosition({ name: mockInterviewFlow.positionName });
          setInterviewSteps(mockInterviewFlow.interviewFlow.interviewSteps);
          setCandidates(mockCandidates);
          setTimeout(() => setLoading(false), 500); // Simular carga
        } else {
          const flowData = await getPositionInterviewFlow(id);
          const candidatesData = await getPositionCandidates(id);
          
          setPosition({ name: flowData.positionName });
          setInterviewSteps(flowData.interviewFlow.interviewSteps);
          setCandidates(candidatesData);
          setLoading(false);
        }
      } catch (err) {
        setError('Error al cargar datos: ' + err.message);
        console.error(err);
        setLoading(false);
      }
    };

    fetchPositionData();
  }, [id, useMockData]);

  // Manejar el cambio de fase de un candidato
  const handleCandidateDrop = async (candidate, newStepId) => {
    try {
      if (!useMockData) {
        await updateCandidateStage(candidate.candidateId, newStepId);
      }
      
      // Actualizar el estado local
      setCandidates(prevCandidates => 
        prevCandidates.map(c => {
          if (c.id === candidate.candidateId) {
            const newStep = interviewSteps.find(step => step.id === newStepId);
            return {
              ...c,
              currentInterviewStep: newStep ? newStep.name : c.currentInterviewStep
            };
          }
          return c;
        })
      );
    } catch (err) {
      setError('Error al actualizar candidato: ' + err.message);
      console.error(err);
    }
  };

  // Manejar volver a la página de posiciones
  const handleBack = () => navigate('/positions');

  // Renderizar componente
  if (loading) {
    return <div className="text-center p-5">Cargando...</div>;
  }

  if (error) {
    return <div className="text-center p-5 text-danger">{error}</div>;
  }

  return (
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
      <Container className="mt-4 mb-5">
        <BoardHeader 
          positionName={position?.name} 
          onBack={handleBack} 
        />
        
        <BoardColumns 
          interviewSteps={interviewSteps}
          candidates={candidates}
          onCandidateDrop={handleCandidateDrop}
        />
      </Container>
    </DndProvider>
  );
};

export default PositionBoard; 