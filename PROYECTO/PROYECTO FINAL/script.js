let productos = [
    {codigo: "IM100-012", nombre: "panty tipo brasilera", descripcion: "Paquete x3 panty tipo brasilera en algodón", precio: 14.945},
    {codigo: "IM100-010", nombre: "panty clásico tipo hister", descripcion: "Paquete x3 panty clásico tipo hister en algodón", precio: 11.345},
    {codigo: "LC-004", nombre: "Brasilera corte laser", descripcion: "Brasilera corte laser paquete x10", precio: 16.425},
    {codigo: "944P", nombre: "Panty en microfibra", descripcion: "Panty en microfibra y algodón con corte a laser y termo fusionado", precio: 23.945},
    {codigo: "916-M", nombre: "Panty de control", descripcion: "Panty de control tipo brasilera cintura alta", precio: 13.145},
    {codigo: "PL02-156DB", nombre: "Hipster sin costura", descripcion: "Hipster sin costuras laterales paquete x10", precio: 69.955},
    {codigo: "IG101-001", nombre: "Brasier en microfibra", descripcion: "Brasier en microfibra con recubrimiento medio", precio: 23.945},
    {codigo: "IN193-001", nombre: "Conjunto de tops", descripcion: "Conjunto de tops en algodón niña", precio: 9.455},
    {codigo: "821DB", nombre: "Paquete x2 top", descripcion: "Paquete x2 top microfibra sin costuras", precio: 17.945},
    {codigo: "IM233-004", nombre: "Panty bóxer", descripcion: "Panty bóxer en seamless paquetería x3", precio: 36.905},
    {codigo: "LC-001IB", nombre: "Paquete x2 bóxer", descripcion: "Paquete x2 bóxer en microfibra corte láser", precio: 11.955},
    {codigo: "MJ105-031", nombre: "Paquete x2 panty", descripcion: "Paquete x2 panty tipo bóxer", precio: 10.955},
];


let carrito = [];


function cargar() {
    const producto= document.getElementById('producto').value.toLowerCase().trim();
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const filtrados = productos.filter(p => 
        p.nombre.toLowerCase().includes(producto) || 
        p.codigo.toLowerCase().includes(producto)
    );
    filtrados.forEach(p => {
        resultado.innerHTML += `
            <div class="producto">
                <p><strong>Código:</strong> ${p.codigo}</p>
                <p><strong>Nombre:</strong> ${p.nombre}</p>
                <p><strong>Descripción:</strong> ${p.descripcion}</p>
                <p><strong>Precio:</strong> $${p.precio}</p>
                <button onclick="agregarAlCarrito('${p.codigo}')">Agregar al carrito</button>
            </div>
        `;
    });
}

function limpiar() {
    document.getElementById('producto').value = '';
    cargar();
}

function agregarAlCarrito(codigo) {
    const producto = productos.find(p => p.codigo === codigo);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
        alert(`Producto con código ${codigo} agregado al carrito`);
    }
}

function eliminarDelCarrito(codigo) {
    carrito = carrito.filter(p => p.codigo !== codigo);
    actualizarCarrito();
    alert(`Producto con código ${codigo} eliminado del carrito`);
}

function actualizarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '<h2>Carrito de Compras</h2>';
    if (carrito.length === 0) {
        carritoDiv.innerHTML += '<p>El carrito está vacío.</p>';
    } else {
        carrito.forEach(p => {
            carritoDiv.innerHTML += `
                <div class="producto">
                    <p><strong>Código:</strong> ${p.codigo}</p>
                    <p><strong>Nombre:</strong> ${p.nombre}</p>
                    <p><strong>Precio:</strong> $${p.precio}</p>
                    <button onclick="eliminarDelCarrito('${p.codigo}')">Eliminar</button>
                </div>
            `;
        });
    }
}

window.onload = cargar;
