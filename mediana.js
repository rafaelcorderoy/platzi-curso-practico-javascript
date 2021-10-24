let  lista1 = [
    600,
    200,
    800,
    500,
    400000000,     
    900,
    300,
    100,
    50,
];

const mitadLista1 = Math.ceil(lista1.length / 2);
console.log("la mitad es " + mitadLista1);
console.log("La lista original es " + lista1);
//lista1.sort();
lista1 = ordenarLista(lista1);
console.log("La lista ordenada es " + lista1);

calcularMediana(lista1);

function esPar(numero) {
    let modulo = numero % 2;
//    console.log("El modulo es " + modulo);
    if (modulo === 0) {
//        console.log ("Es par");
        return true;} 
    else {
//        console.log ("Es par");
        return false;}
}

function calcularMediana(lista) {
    let mediana;
    let suma;
    const mitadLista = Math.ceil(lista.length / 2);
    
//    console.log("El tamaño de la lista es " + lista.length);
    if (esPar(lista.length)) {
//        console.log("Es par y los valores de la mitad son " + lista[mitadLista - 1] + " y " + lista1[mitadLista1]);
        suma = parseFloat(lista[mitadLista - 1] + lista[mitadLista]);
//        console.log("La suma es " + suma);
        mediana = suma / 2
    }
    else {
//        console.log("Es impar y valor en el medio es " + lista[mitadLista - 1]);    
        mediana = lista[mitadLista - 1];
    }
    
    console.log("la mediana " + mediana);
    
}
function ordenarLista(lista) {
    let aux = 0;
    listaInterna = lista;
    let i = 0;
    let j = i + 1;
    let cambios = 1;
    let ordenado = false;
    let salir = false;
    while (!salir) {
        if (listaInterna[i] > listaInterna[j]) {
            aux = listaInterna[i];
            listaInterna[i] = listaInterna[j];
            listaInterna[j] = aux;
            ordenado = false;
/*            console.log("Lista-i " + listaInterna[i] + " lista-j " + listaInterna[j]);
            console.log("i " + i + " j " + j);
            console.log("Antes de cambiar " + listaInterna);*/
            console.log("Cambio " + cambios + " " + listaInterna);
            cambios++;
        }
//        else {console.log("sin cambio");}
        if (j === listaInterna.length) {
            i++;
            j = i + 1;
            if (ordenado) {
                salir = true;
            }
            ordenado = true;
        } else {
            j++;
        }
    }
    console.log("Cambios " + cambios);
    return listaInterna;
}

