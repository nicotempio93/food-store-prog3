import { PRODUCTS } from "../../../data/data.ts";
import type { IProduct } from "../../../types/product.ts";
import { addCartItem } from "../../../utils/cart.ts";

const renderizarProductos = (productos: IProduct[]) => {
  const contenedorProductos = document.getElementById("contenedor-productos");

  productos.forEach((producto) => {
    const { id, nombre, precio } = producto;
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img class="producto-imagen" src="../../../../public/pizza.jpg" alt="${nombre}">
      <div class="producto-detalles">
        <h3 class="producto-nombre">${nombre}</h3>
        <p class="producto-precio">$${precio}</p>
        <button class="producto-boton" data-id="${id}">Agregar al carrito</button>
      </div>
    `;

    const botonAgregar = div.querySelector(".producto-boton");
    botonAgregar?.addEventListener("click", () => {
      addCartItem(producto);
    });
    contenedorProductos?.appendChild(div);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderizarProductos(PRODUCTS);
});
