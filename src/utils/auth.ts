import type { ISession } from "../types/ISession";
import type { Rol } from "../types/Rol";
import { navigate } from "./navigate";
import { getSession, removeSession } from "./localStorage";

export const checkAuhtUser = (
  redireccion1: string,
  redireccion2: string,
  rol: Rol,
) => {
  console.log("comienzo de checkeo");

  const session = getSession();

  if (!session) {
    console.log("no existe en local");
    navigate(redireccion1);
    return;
  } else {
    const parseSession: ISession = JSON.parse(session);
    if (parseSession.role !== rol) {
      alert("existe pero no tiene el rol necesario");
      navigate(redireccion2);
      return;
    }
  }
};

export const logout = () => {
  removeSession();
  navigate("/src/pages/auth/login/login.html");
};
