const precioOriginal = 200;
const porcentajeDescuento = 25;

function calcularPorcentajePrecioConDescuento (porcentaje) { 
    return 100 - porcentaje;
}

function calcularPrecioConDescuento (precio, descuento) {
    return (precio * calcularPorcentajePrecioConDescuento(descuento)) / 100;
}
console.log(precioOriginal, 
    porcentajeDescuento, 
    calcularPorcentajePrecioConDescuento (porcentajeDescuento), 
    calcularPrecioConDescuento (precioOriginal, calcularPorcentajePrecioConDescuento (porcentajeDescuento)));