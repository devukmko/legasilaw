import { api } from "./api";

export  const createFeedback = async (payload: { fullname: string; phoneNumber: string; email: string; message: string; }) => {
  const response = await api.post('/api/feedback', payload);
  return response.data;
};

