const lista1 = [
    100,
    200,
    500,
    600,
    800,
    900,
    400000000,     
];

const mitadLista1 = Math.ceil(lista1.length / 2);
console.log("la mitad es " + mitadLista1);

let mediana;
let suma;

console.log("El tamaño de la lista es " + lista1.length);
if (esPar(lista1.length)) {
    console.log("Es par y los valores de la mitad son " + lista1[mitadLista1 - 1] + " y " + lista1[mitadLista1]);
    suma = parseFloat(lista1[mitadLista1 - 1] + lista1[mitadLista1]);
    console.log("La suma es " + suma);
    mediana = suma / 2
}
else {
    console.log("Es impar y valor en el medio es " + lista1[mitadLista1 - 1]);    
    mediana = lista1[mitadLista1 - 1];
}

console.log("la mediana " + mediana);

function esPar(numero) {
    let modulo = numero % 2;
    console.log("El modulo es " + modulo);
    if (modulo === 0) {
        console.log ("Es par");
        return true;} 
    else {
        console.log ("Es par");
        return false;}
}

