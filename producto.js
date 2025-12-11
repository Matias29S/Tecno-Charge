let cantidad = 1;
let precio = 14999;
/*se declara la cantidad inicial y el precio del producto*/
function actualizarTotal() {
    const total = cantidad * precio; /*se calcula el total*/
    document.getElementById("total").innerText = "$" + total;
}

function cambiarCantidad(num) {
    cantidad += num; /*acumulador*/
    if (cantidad < 1) cantidad = 1;
    document.getElementById("cantidad").innerText = cantidad;
    actualizarTotal();
}

function confirmarCompra() {
    const color = document.getElementById("color").value; /*selecciona el color del producto para luego usarlo en el aviso*/
    alert("Compraste " + cantidad + " unidad(es) en color " + color + ". Total: $" + (cantidad * precio)); /*aviso de compra*/
}


