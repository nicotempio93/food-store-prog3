import { checkAuhtUser } from "./utils/auth";

const urlActual: string = window.location.pathname;

if (urlActual.includes("/admin/")) {
  checkAuhtUser(
    "/src/pages/auth/login/login.html",
    "/src/pages/client/home/home.html",
    "admin",
  );
} else if (urlActual.includes("/client/")) {
  checkAuhtUser(
    "/src/pages/auth/login/login.html",
    "/src/pages/admin/home/home.html",
    "client",
  );
}
