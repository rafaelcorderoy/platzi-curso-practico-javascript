const lista1 = [
    100,
    200,
    300,
    500,     
];

let sumaLista1 = 0;
console.log("La suma es " + sumaLista1);

for (let i = 0; i < lista1.length; i++) {
    sumaLista1 = sumaLista1 + lista1[i];
    console.log("La suma es " + sumaLista1);
    console.log(lista1[i]);
}
console.log("el total es " + sumaLista1);

console.log(lista1.length);

let promedioLista1 = sumaLista1 / lista1.length;

console.log("El promedio es " + promedioLista1);