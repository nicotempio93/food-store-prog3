import type { IProduct, ICartItem } from "../types/product";

export const getCartItems = (): ICartItem[] => {
  const raw = localStorage.getItem("cart");
  return raw ? JSON.parse(raw) : [];
};

export const addCartItem = (item: IProduct): void => {
  const cartItems = getCartItems();
  const existingItem = cartItems.find((i) => i.id === item.id);
  if (existingItem) {
    existingItem.cantidad += 1;
  } else {
    const newItem: ICartItem = {
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: 1,
      imagen: item.imagen,
    };
    cartItems.push(newItem);
  }
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

export const getCartTotal = (): number => {
  const cartItems = getCartItems();
  return cartItems.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0,
  );
};

export const updateQuantity = (itemId: number, quantity: number): void => {
  const cartItems = getCartItems();
  const item = cartItems.find((i) => i.id === itemId);
  if (item) {
    item.cantidad = quantity;
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }
};
