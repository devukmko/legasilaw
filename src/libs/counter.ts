import { api } from "./api";

export const visitorCounter = async () => {
  const response = await api.post("/api/visitor-counter");
  if (!response.ok) throw new Error("Something went wrong");
  return response.data;
};

export const whatsappClickCounter = async () => {
  const response = await api.post("/api/whatsapp-click-counter");
  if (!response.ok) throw new Error("Something went wrong");
  return response.data;
};
