import axios from 'axios';

const API_URL = 'http://localhost:3010';

export const getPositionInterviewFlow = async (positionId) => {
  try {
    const response = await axios.get(`${API_URL}/positions/${positionId}/interviewFlow`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener el flujo de entrevistas: ' + error.message);
  }
};

export const getPositionCandidates = async (positionId) => {
  try {
    const response = await axios.get(`${API_URL}/positions/${positionId}/candidates`);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener candidatos: ' + error.message);
  }
};

export const updateCandidateStage = async (applicationId, currentInterviewStep) => {
  try {
    const response = await axios.put(`${API_URL}/candidates/${applicationId}/stage`, {
      applicationId,
      currentInterviewStep
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al actualizar la etapa del candidato: ' + error.message);
  }
}; 