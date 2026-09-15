import { PRODUCTS } from "../../../data/data.ts";
import type { IProduct } from "../../../types/product.ts";
import { addCartItem } from "../../../utils/cart.ts";
import { getCategories } from "../../../data/data.ts";

const inputBusqueda = document.getElementById(
  "inputBusqueda",
) as HTMLInputElement;
inputBusqueda.addEventListener("input", () => {
  const busqueda = inputBusqueda.value.toLowerCase();
  const productosFiltrados = PRODUCTS.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda),
  );
  renderizarProductos(productosFiltrados);
});

const renderizarProductos = (productos: IProduct[]) => {
  const contenedorProductos = document.getElementById("contenedor-productos");
  if (!contenedorProductos) return;
  contenedorProductos.innerHTML = "";
  if (productos.length !== 0) {
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
  } else {
    contenedorProductos.innerHTML = "<p>No hay productos disponibles.</p>";
  }
};

const filtrarPorCategoria = (categoria: string) => {
  const productosFiltrados = PRODUCTS.filter((producto) =>
    producto.categorias.some((cat) => cat.nombre === categoria),
  );
  renderizarProductos(productosFiltrados);
};

const contenedorCategorias = document.getElementById("contenedor-categorias");

const btnTodos = document.createElement("button");
btnTodos.classList.add("categoria-boton");
btnTodos.textContent = "Todos";
contenedorCategorias?.appendChild(btnTodos);
btnTodos.addEventListener("click", () => {
  renderizarProductos(PRODUCTS);
});

getCategories().forEach((categoria) => {
  const { nombre } = categoria;
  const btnCat = document.createElement("button");
  btnCat.classList.add("categoria-boton");
  btnCat.textContent = nombre;
  contenedorCategorias?.appendChild(btnCat);
  btnCat.addEventListener("click", () => {
    filtrarPorCategoria(nombre);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  renderizarProductos(PRODUCTS);
});
