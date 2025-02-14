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
    let mensaje = "¡Hola! Quiero hacer un pedido de medallones:\n";
    carrito.forEach(item => mensaje += `- ${item.nombre} - $${item.precio}\n`);
    mensaje += `Total: $${total}`;
    let url = `https://wa.me/5493764835650?text=${encodeURIComponent(mensaje)}`;
    window.location.href = url;
}
