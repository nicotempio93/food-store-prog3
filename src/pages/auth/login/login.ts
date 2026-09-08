import type { IUser } from "../../../types/IUser";
import type { ISession } from "../../../types/ISession";

import {
  findUserByCredentials,
  saveSession,
} from "../../../utils/localStorage";
import { navigate } from "../../../utils/navigate";

const form = document.getElementById("form") as HTMLFormElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;
const inputPass = document.getElementById("pass") as HTMLInputElement;

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  const valueEmail = inputEmail.value;
  const valuePass = inputPass.value;

  const user: IUser | undefined = findUserByCredentials(valueEmail, valuePass);

  if (!user) {
    alert("Error en las credencales");
    return;
  } else {
    const session: ISession = {
      email: user.email,
      role: user.role,
      loggedIn: true,
    };
    saveSession(session);

    if (user.role === "admin") {
      navigate("/src/pages/admin/home/home.html");
    } else if (user.role === "client") {
      navigate("/src/pages/client/home/home.html");
    }
  }
});
