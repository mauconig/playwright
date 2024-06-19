// tests/inventory.spec.ts

import { test } from "@playwright/test";
import { InventoryPage } from "../pages/inventory-page";
import { LoginPage } from "../pages/login-page";

// Definimos el test, el nombre y una instancia de la página (page)
test("clickear todos los botones Add to cart y verificar carrito", async ({
  page,
}) => {
  // Creamos una instancia de LoginPage para acceder a sus métodos
  const loginPage = new LoginPage(page);
  // Navega a la URL proporcionada
  await page.goto("https://www.saucedemo.com/");
  // Usando la instancia creada, accedemos a los métodos que necesitamos
  await loginPage.loguear_credenciales("standard_user", "secret_sauce");

  // Creamos una instancia de InventoryPage para acceder a sus métodos
  const inventoryPage = new InventoryPage(page);
  // Usando la instancia creada, accedemos a los métodos que necesitamos
  await inventoryPage.clickear_todos_addToCart();

  // Obtener los nombres de todos los elementos añadidos al carrito
  const nombresItems = await inventoryPage.obtener_nombres_items();
  console.log("Nombres de los items añadidos al carrito:", nombresItems);

  // Hacer clic en el contenedor del carrito de compras
  await inventoryPage.clickear_carrito_compras();

  // Verificar que los ítems en el carrito coinciden con los ítems añadidos
  await inventoryPage.verificar_items_en_carrito(nombresItems);
});

//test
