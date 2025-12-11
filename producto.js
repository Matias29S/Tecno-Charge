let cantidad = 1;
let precio = 14999;

function actualizarTotal() {
    const total = cantidad * precio;
    document.getElementById("total").innerText = "$" + total;
}

function cambiarCantidad(num) {
    cantidad += num;
    if (cantidad < 1) cantidad = 1;
    document.getElementById("cantidad").innerText = cantidad;
    actualizarTotal();
}

function confirmarCompra() {
    const color = document.getElementById("color").value;
    alert("Compraste " + cantidad + " unidad(es) en color " + color + ". Total: $" + (cantidad * precio));
}

