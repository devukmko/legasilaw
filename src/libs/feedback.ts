import { api } from "./api";

export  const createFeedback = async (payload: { fullname: string; phoneNumber: string; email: string; message: string; }) => {
  const response = await api.post('/api/feedback', payload);
  if (!response.ok) throw new Error('Something went wrong');
  return response.data;
};

