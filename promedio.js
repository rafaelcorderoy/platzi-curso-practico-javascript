const lista1 = [
    100,
    200,
    300,
    500,     
];


function calcularMediaAritmetica(lista) {
    /* let sumaLista = 0;
    
    console.log("La lista compelta es " + lista);
    console.log(lista.length);
    console.log("La suma es " + sumaLista);


    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
        console.log("El valor a ser sumado es " + lista[i]);
        console.log("La suma es " + sumaLista);
    }*/

    const sumaLista = lista.reduce (
        function (valorAcumulado, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    console.log("el total es " + sumaLista);
    console.log("La longitud de la lista es " + lista.length);

    
    let promedioLista = sumaLista / lista.length;

    console.log("El promedio es " + promedioLista);

    return promedioLista;

}