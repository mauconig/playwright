// pages/login-page.ts

// Importaciones necesarias desde el paquete @playwright/test
import { expect, type Locator, type Page } from "@playwright/test";

// Definición de la clase LoginPage, que representa la página de login.
export class LoginPage {
  // Propiedad para almacenar la instancia de la página de Playwright
  readonly page: Page;
  // Propiedad para almacenar el elementos web (Locator)
  readonly input_username: Locator;
  readonly input_password: Locator;
  readonly btn_login: Locator;
  readonly h3_msj_errorLockedUser: Locator;

  // Constructor de la clase, inicializa las propiedades con los elementos correspondientes
  constructor(page: Page) {
    this.page = page;
    this.input_username = page.locator('//input[@id="user-name"]');
    this.input_password = page.locator('//input[@id="password"]');
    this.btn_login = page.locator('//input[@id="login-button"]');
    this.h3_msj_errorLockedUser = page.getByText(
      "Epic sadface: Sorry, this user has been locked out.",
      { exact: true }
    );
  }

  // Método para loguear las credenciales y hacer clic en el botón de login
  async loguear_credenciales(username: string, password: string) {
    await this.input_username.fill(username);
    await this.input_password.fill(password);
    await this.btn_login.click();
  }

  // Método para validar que el mensaje de error de usuario bloqueado sea visible
  async validar_msj_errorLockedUser() {
    await expect(this.h3_msj_errorLockedUser).toBeVisible();
  }
}
