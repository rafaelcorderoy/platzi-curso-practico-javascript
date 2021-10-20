const precioOriginal = 120;
const porcentajeDescuento = 18;
const porcentajePrecioConDescuento = 100 - porcentajeDescuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

console.log({precioOriginal, porcentajeDescuento, porcentajePrecioConDescuento, precioConDescuento});