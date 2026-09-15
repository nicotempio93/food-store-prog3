import { getCartItems } from "../../../utils/cart.ts";

const contenedorCarrito = document.getElementById("contenedor-carrito");
const totalCarrito = document.getElementById("total-carrito");

const renderizarCarrito = () => {
  const carrito = getCartItems();
  if (!contenedorCarrito || !totalCarrito) return;
  contenedorCarrito.innerHTML = "";
  if (carrito.length !== 0) {
    carrito.forEach(
      (producto: { nombre: string; precio: number; cantidad: number }) => {
        const { nombre, precio, cantidad } = producto;
        const div = document.createElement("div");
        div.classList.add("producto-carrito");
        div.innerHTML = `
                <h3 class="producto-nombre">${nombre}</h3>
                <p class="producto-precio">$${precio}</p>
                <p class="producto-cantidad">Cantidad: ${cantidad}</p>
                <span class="producto-subtotal">Subtotal: $${precio * cantidad}</span>
            `;
        contenedorCarrito?.appendChild(div);
      },
    );
  } else {
    contenedorCarrito.innerHTML = "<p>El carrito está vacío.</p>";
  }
  const total = carrito.reduce(
    (total: number, item: { precio: number; cantidad: number }) =>
      total + item.precio * item.cantidad,
    0,
  );
  totalCarrito.textContent = `Total: $${total}`;
};

renderizarCarrito();
