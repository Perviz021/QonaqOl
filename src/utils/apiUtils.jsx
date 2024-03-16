import axios from "axios";
import { endPoints } from "../api/endPoints";

const BASE_URL = "https://qonaqol.onrender.com/qonaqol/";
const api = axios.create({
  baseURL: BASE_URL,
});

export const createEvent = (params, eventData) => {
  return api.post(endPoints.event_controller.create(params), eventData, {
    headers: "multipart/form-data",
  });
};

export const getEvents = async () => {
  return await api.get(endPoints.event_controller.all);
};

// export const getEvents =
