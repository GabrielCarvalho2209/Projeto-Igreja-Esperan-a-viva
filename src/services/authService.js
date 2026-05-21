import { api, useMocks } from "./api";

export async function loginRequest(credentials) {
  if (useMocks) {
    return {
      token: "mock-token",
      user: {
        name: "Administrador",
        email: credentials.email,
      },
    };
  }

  const response = await api.post("/auth/login", credentials);
  return response.data;
}
