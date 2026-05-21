import { api, useMocks } from "./api";
import { eventsMock, participantsMock } from "../data/mockData";

const REGISTRATIONS_KEY = "church_event_registrations";

function readRegistrations() {
  return JSON.parse(localStorage.getItem(REGISTRATIONS_KEY) || "[]");
}

function writeRegistrations(registrations) {
  localStorage.setItem(REGISTRATIONS_KEY, JSON.stringify(registrations));
}

export async function getEvents() {
  if (useMocks) return eventsMock;
  const response = await api.get("/events");
  return response.data;
}

export async function getEventById(id) {
  if (useMocks) return eventsMock.find((event) => String(event.id) === String(id));
  const response = await api.get(`/events/${id}`);
  return response.data;
}

export async function getParticipantsByEvent(eventId) {
  if (useMocks) {
    const saved = readRegistrations();
    return [...participantsMock, ...saved].filter(
      (participant) => String(participant.eventId) === String(eventId)
    );
  }

  const response = await api.get(`/events/${eventId}/participants`);
  return response.data;
}

export async function registerParticipant(eventId, participant) {
  if (useMocks) {
    const saved = readRegistrations();
    const newParticipant = {
      id: Date.now(),
      eventId: Number(eventId),
      ...participant,
    };
    writeRegistrations([...saved, newParticipant]);
    return newParticipant;
  }

  const response = await api.post(`/events/${eventId}/registrations`, participant);
  return response.data;
}
