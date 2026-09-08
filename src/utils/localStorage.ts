import type { IUser } from "../types/IUser";
import type { ISession } from "../types/ISession";

// --- usuarios registrados ---
export const getUsers = (): IUser[] => {
  const raw = localStorage.getItem("users");
  return raw ? JSON.parse(raw) : [];
};

export const addUser = (user: IUser): void => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
};

export const findUserByEmail = (email: string): IUser | undefined => {
  return getUsers().find((u) => u.email === email);
};

// --- sesión activa ---
export const saveSession = (session: ISession): void => {
  localStorage.setItem("userData", JSON.stringify(session));
};

export const getSession = (): string | null => {
  return localStorage.getItem("userData");
};

export const removeSession = (): void => {
  localStorage.removeItem("userData");
};

export const findUserByCredentials = (
  email: string,
  pass: string,
): IUser | undefined => {
  return getUsers().find((u) => u.email === email && u.pass === pass);
};
