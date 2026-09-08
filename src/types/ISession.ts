import type { Rol } from "./Rol";

export interface ISession {
  email: string;
  role: Rol;
  loggedIn: boolean;
}
