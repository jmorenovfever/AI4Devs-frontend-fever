// Datos mock para desarrollo
export const mockInterviewFlow = {
  positionName: "Senior Backend Engineer",
  interviewFlow: {
    id: 1,
    description: "Standard development interview process",
    interviewSteps: [
      {
        id: 1,
        interviewFlowId: 1,
        interviewTypeId: 1,
        name: "Llamada telefónica",
        orderIndex: 1
      },
      {
        id: 2,
        interviewFlowId: 1,
        interviewTypeId: 2,
        name: "Entrevista técnica",
        orderIndex: 2
      },
      {
        id: 3,
        interviewFlowId: 1,
        interviewTypeId: 3,
        name: "Entrevista cultural",
        orderIndex: 3
      },
      {
        id: 4,
        interviewFlowId: 1,
        interviewTypeId: 4,
        name: "Entrevista manager",
        orderIndex: 4
      }
    ]
  }
};

export const mockCandidates = [
  {
    id: 1,
    fullName: "John Doe",
    currentInterviewStep: "Llamada telefónica",
    averageScore: 3
  },
  {
    id: 2,
    fullName: "Alice Johnson",
    currentInterviewStep: "Llamada telefónica",
    averageScore: 4
  },
  {
    id: 3,
    fullName: "Jane Smith",
    currentInterviewStep: "Entrevista técnica",
    averageScore: 3
  },
  {
    id: 4,
    fullName: "Bob Brown",
    currentInterviewStep: "Entrevista cultural",
    averageScore: 2
  },
  {
    id: 5,
    fullName: "Eva White",
    currentInterviewStep: "Entrevista manager",
    averageScore: 5
  }
]; 