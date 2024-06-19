// pages/inventory-page.ts

import { expect, type Locator, type Page } from "@playwright/test";

// Definición de la clase InventoryPage, que representa la página de inventario.
export class InventoryPage {
  // Propiedad para almacenar la instancia de la página de Playwright
  readonly page: Page;
  // Propiedad para almacenar los elementos web (Locator)
  readonly btn_addToCart: Locator;
  readonly inventory_item_name: Locator;
  readonly shopping_cart_container: Locator;

  // Constructor de la clase, inicializa las propiedades con los elementos correspondientes
  constructor(page: Page) {
    this.page = page;
    this.btn_addToCart = page.locator('//button[text()="Add to cart"]');
    this.inventory_item_name = page.locator(".inventory_item_name");
    this.shopping_cart_container = page.locator(".shopping_cart_container");
  }

  // Método para hacer clic en todos los botones "Add to cart"
  async clickear_todos_addToCart() {
    const botones = await this.btn_addToCart.elementHandles();
    for (const boton of botones) {
      await boton.click();
    }
  }

  // Método para obtener los nombres de todos los elementos añadidos al carrito
  async obtener_nombres_items() {
    const nombres = await this.inventory_item_name.allTextContents();
    return nombres;
  }

  // Método para hacer clic en el contenedor del carrito de compras
  async clickear_carrito_compras() {
    await this.shopping_cart_container.click();
  }

  // Método para obtener los nombres de todos los elementos en el carrito de compras
  async obtener_nombres_items_carrito() {
    await this.page.waitForSelector(".cart_item");
    const nombresCarrito = await this.page
      .locator(".inventory_item_name")
      .allTextContents();
    return nombresCarrito;
  }

  // Método para verificar que los nombres de los ítems en el carrito coinciden con los nombres originales
  async verificar_items_en_carrito(nombresItemsOriginales: string[]) {
    const nombresCarrito = await this.obtener_nombres_items_carrito();
    for (const nombre of nombresItemsOriginales) {
      await expect(nombresCarrito).toContain(nombre);
    }
  }
}
