// se crea un array que contiene en cada posición un objeto que contiene, 
// por cada curso, su nombre, creditos y la nota obtenida

const notas = [
    {
        curso: "matematica",
        creditos: 4,
        nota: 17,
    },
    {
        curso: "fisica",
        creditos: 4,
        nota: 14,
    },
    {
        curso: "quimica",
        creditos: 4,
        nota: 18,
    },
    {
        curso: "castellano",
        creditos: 2,
        nota: 14,
    },
    {
        curso: "gesografia",
        creditos: 2,
        nota: 16,
    },
    {
        curso: "historia",
        creditos: 2,
        nota: 12,
    },
    {
        curso: "psicologia",
        creditos: 2,
        nota: 10,
    },
    {
        curso: "ingles",
        creditos: 3,
        nota: 18,
    }
];


// se calcula el producto de la nota por el credito en cada materia, generando un nuevo array
// usando el metodo map de los arrays

const notasXCredito = notas.map (
    function(objetoNotas) {
        return objetoNotas.nota * objetoNotas.creditos
    }
);


// se crea una constante que contendrá la suma de los productos de credito y nota 
//de todos los cursos, utilizando para ello el metodo reduce de los arrays

const acumulaNotaXCredito = notasXCredito.reduce (
    function(acumulado = 0, nuevoValor) {
        return acumulado + nuevoValor;
    }
)

// selecciona solo los creditos del array de notas para crear un nuevo array
// usando para ello el metodo map

const creditos = notas.map (
    function(objetoNotas) {
        return objetoNotas.creditos;
    }
)
// se crea una constante que contendrá la suma de los creditos 
//de todos los cursos, utilizando para ello el metodo reduce de los arrays

const acumulaCredito = creditos.reduce (
    function(acumulado = 0, nuevoValor) {
        return acumulado + nuevoValor;
    }
)

// Calcula el prmedio ponderado dividiendo el acumulado del producto de notas x credito 
// entre el acumulado de los creditos

const promedioPonderado = acumulaNotaXCredito / acumulaCredito;

console.log ("El promedio ponderado es " + promedioPonderado);

// vamos a calcular el prmedio normal, sin ponderación
// para ello primero se crea el array que contenga solo las notas

const soloNotas = notas.map (
    function (objetoNotas) {
        return objetoNotas.nota;
    }
)

const acumulaNotas = soloNotas.reduce (
    function (acumula = 0, valor) {
        return acumula + valor;
    }
)

const promedio = acumulaNotas / notas.length;
console.log("El promedio normal es " + promedio);