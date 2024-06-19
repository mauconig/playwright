// tests/login.spec.ts

// Se utiliza para definir y ejecutar tests.
import { test } from "@playwright/test";
// Importamos LoginPage que contiene la logica de nuestra clase de pagina
import { LoginPage } from "../pages/login-page";

// Definimos el test, el nombre y una instacia de la pagina(page)
test("login usuario locked", async ({ page }) => {
  // Creamos una instacia de LoginPage para acceder a sus metodos
  const loginPage = new LoginPage(page);
  // Navega a la URL proporcionada
  await page.goto("https://www.saucedemo.com/");
  // Usando la instacia creada, accedemos a los metodos que necesitamos
  await loginPage.loguear_credenciales("locked_out_user", "secret_sauce");
  await loginPage.validar_msj_errorLockedUser();
});
