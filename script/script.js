function addToCart(productName) {
    alert(`¡Producto ${productName} agregado al carrito!`);
}
// 1. Arreglo de productos
const listaProductos = [
  {
    id: 1,
    nombre: "Set Pro 1",
    precio: 40000,
    imagen: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.IXZbyBm3Lb9G1GIMu1xWwwHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=eed79c70fe433d5850f578149ec37a4824160ca0bbcbc14fccc461998fa4d7bb&ipo=images"
  },
  {
    id: 2,
    nombre: "Set normal",
    precio: 2000,
    imagen: "img/producto2.jpg"
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 10000,
    imagen: "img/producto3.jpg"
  }
];

// 2. Función para mostrar los productos en HTML
function cargarProductos() {
  const contenedor = document.getElementById("contenedor-productos");

  // Limpiar el contenido anterior
  contenedor.innerHTML = "";

  // Recorrer la lista de productos
  listaProductos.forEach((producto) => {
    const tarjeta = document.createElement("div");

    tarjeta.classList.add("tarjeta-producto");

    tarjeta.innerHTML = `
      <img 
        src="${producto.imagen}" 
        alt="${producto.nombre}"
      >

      <h3>${producto.nombre}</h3>

      <p>$${producto.precio}</p>

      <button onclick="agregarAlCarrito(${producto.id})">
        Añadir al carrito
      </button>
    `;

    contenedor.appendChild(tarjeta);
  });
}

// 3. Función para añadir productos al carrito
function agregarAlCarrito(idProducto) {
  const productoSeleccionado = listaProductos.find(
    (producto) => producto.id === idProducto
  );

  if (productoSeleccionado) {
    console.log("Producto añadido al carrito:", productoSeleccionado);
    alert(`${productoSeleccionado.nombre} fue añadido al carrito`);
  }
}

// 4. Cargar los productos cuando se abra la página
document.addEventListener("DOMContentLoaded", cargarProductos);
