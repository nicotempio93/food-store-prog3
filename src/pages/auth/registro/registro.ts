import { addUser, findUserByEmail } from "../../../utils/localStorage";
import type { IUser } from "../../../types/IUser";

const email = document.querySelector("#email") as HTMLInputElement;
const pass = document.querySelector("#pass") as HTMLInputElement;
const form = document.querySelector("#formulario-registro") as HTMLFormElement;

const guardarDatos = (email: string, pass: string): void => {
  if (findUserByEmail(email)) {
    alert("Usurio ya registrado");
    return;
  } else {
    const nuevoUser: IUser = {
      email: email,
      pass: pass,
      role: "client",
    };

    addUser(nuevoUser);
    alert("Registro exitoso.");
  }
};

form?.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  guardarDatos(email.value, pass.value);
});
