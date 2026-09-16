# Proyecto: Protección de Rutas (Educativo)

## Link video explicativo

[Video explcativo](https://youtu.be/CgFx4fMFQV0)

## ✍️ Descripción

Aplicación frontend de catálogo de comidas con carrito de compras persistente,
desarrollada para la Evaluación 1 de Programación III (UTN).

Extiende el Trabajo Práctico Integrador de TypeScript, que ya incluía registro,
login y protección de rutas por rol.

## Funcionalidades

- **Catálogo dinámico**: los productos y las categorías se renderizan desde
  `src/data/data.ts`, no están escritos en el HTML.
- **Búsqueda por nombre**: filtra mientras se escribe, sin distinguir mayúsculas,
  y avisa cuando no hay coincidencias.
- **Filtrado por categoría**: menú lateral generado desde `getCategories()`, con
  un botón "Todos" para volver al catálogo completo.
- **Carrito persistente**: los productos se guardan en `localStorage` bajo la
  clave `"cart"`. Agregar un producto ya presente incrementa su cantidad en lugar
  de duplicar el ítem.
- **Vista de carrito**: muestra nombre, precio, cantidad y subtotal de cada
  producto, más el total general.

## 🚀 Instalación y Uso

Se recomienda usar `pnpm` como gestor de paquetes para mayor eficiencia en el manejo de dependencias.

### 1. Instalar pnpm

Si no tienes `pnpm` instalado, puedes hacerlo fácilmente a través de `npm` (que viene con Node.js) ejecutando el siguiente comando en tu terminal:

```bash
npm install -g pnpm
```

### 2. Instalar Dependencias del Proyecto

Una vez en la carpeta raíz del proyecto, instala las dependencias necesarias con `pnpm`:

```bash
pnpm install
```

### 3. Ejecutar el Proyecto

Para iniciar el servidor de desarrollo de Vite, ejecuta:

```bash
pnpm dev
```

La aplicación estará disponible en la URL que aparezca en la terminal (generalmente `http://localhost:5173`).
