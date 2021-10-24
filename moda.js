let  lista1 = [
    1,
    3,
    5,
    8,
    2,
    4,
    6,
    8,
    7,
    3,
    2,
    8,
    1,
    6,
    8,
    5,
    8,
    3,
    5,
    7,
    9,
    3,
    5,
    6,
    9,
    1,
    3,
    4,
    5,
    7,
    8,
    6];

const contadorElementos = {};

lista1.map(
    function(elemento) {
        if (contadorElementos[elemento]) {
            contadorElementos[elemento] ++;
        } else {
            contadorElementos[elemento] = 1;
        }

    }
);

const lista1Array = Object.entries(contadorElementos).sort (
    function (valorAnterior, valorNuevo) {
        return valorAnterior[1] - valorNuevo[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];

