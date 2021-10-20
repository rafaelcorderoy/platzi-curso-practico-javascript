const precioOriginal = 200;
const porcentajeDescuento = 25;

function calcularPorcentajePrecioConDescuento (porcentaje) { 
    return 100 - porcentaje;
}

function calcularPrecioConDescuento (precio, descuento) {
    return (precio * calcularPorcentajePrecioConDescuento(descuento)) / 100;
}
/*console.log(precioOriginal, 
    porcentajeDescuento, 
    calcularPorcentajePrecioConDescuento (porcentajeDescuento), 
    calcularPrecioConDescuento (precioOriginal, calcularPorcentajePrecioConDescuento (porcentajeDescuento)));*/

function onClickCalculaPrecioRebajado() {
    const inputPrice = document.getElementById ("InputPrice")
    const price = inputPrice.value;
    const inputDisc = document.getElementById ("InputDiscount")
    const disccount = inputDisc.value;
    const precioFinal = calcularPrecioConDescuento(price, disccount);
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento es $" + precioFinal;
}