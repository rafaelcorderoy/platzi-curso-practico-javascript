// Analisis
// se comenzará a calcular el promedio

// Se selecciona solo los salarios

const salarios = venezuela.map (
    function (objetoSalarios) {
        return objetoSalarios.salary
    }
)

// const salariosOrdenados= ordenarLista(salarios);

const salariosOrdenados = salarios.sort (
    function (salarioA, salarioB) {
        return salarioA - salarioB;
    }

);

const acumulaSalarios = salariosOrdenados.reduce (
    function(suma = 0, valor) {
    return suma + valor;
    }
)

const promedioSalarios = acumulaSalarios / venezuela.length;


// se acumula los salarios de todos


const mediana = calcularMediana(salariosOrdenados);

const ordenadosAux = salariosOrdenados;
const spliceStart = (ordenadosAux.length * 75 / 100);
const spliceCount = ordenadosAux.length - spliceStart;

const salariosTop20 = ordenadosAux.splice (spliceStart, spliceCount);

const medianaTop20 = calcularMediana(salariosTop20);
 
// se acumula los salarios de todos

const acumulaSalariosTop20 = salariosTop20.reduce (
    function(suma = 0, valor) {
    return suma + valor;
    }
);

const promedioSalariosTop20 = acumulaSalariosTop20 / salariosTop20.length;

// funciones helpers 

function esPar(numero) {
    return (numero % 2 === 0);
}

function calcularMediana(lista) {
    let mediana;
    let suma;
    const mitadLista = Math.ceil(lista.length / 2);
    
    if (esPar(lista.length)) {
        suma = parseFloat(lista[mitadLista - 1] + lista[mitadLista]);
        mediana = suma / 2
    }
    else {
        mediana = lista[mitadLista - 1];
    }
    return mediana;    
}


