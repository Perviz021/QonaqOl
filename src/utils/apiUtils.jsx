import axios from "axios";
import { endPoints } from "../api/endPoints";

const BASE_URL = "https://qonaqol.onrender.com/qonaqol/";
const api = axios.create({
  baseURL: BASE_URL,
});
let token = localStorage.getItem("accessToken");
export const createEvent = async (params, eventData) => {
  return await api.post(endPoints.event_controller.create(params), eventData, {
    headers: "multipart/form-data",
  });
};

export const getEvents = async () => {
  return await api.get(endPoints.event_controller.all);
};

export const eventById = async (id) => {
  return await api.get(endPoints.event_controller.getbyId(id));
};

export const reservationById = async (userId) => {
  return await api.get(
    endPoints.reservation_controller.get_reservation(userId)
  );
};

export const deleteEventById = (eventId) => {
  return api.delete(
    endPoints.event_controller.deletebyId(eventId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );
};
