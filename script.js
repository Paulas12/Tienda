let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    let listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.innerHTML = "";
    carrito.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
    });
    document.getElementById("total").textContent = total;
}

function finalizarCompra() {
    let mensaje = "¡Hola! Quiero comprar:\n";
    carrito.forEach(item => mensaje += `- ${item.nombre} - $${item.precio}\n`);
    mensaje += `Total: $${total}`;
    let url = `https://wa.me/tu_numero?text=${encodeURIComponent(mensaje)}`;
    window.location.href = url;
}
