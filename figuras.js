// Código del cuadrado
const ladoCuadrado = 5;
console.group("Cuadrados");
console.log(
    "Los lados del cuadrado miden " 
    + ladoCuadrado + 
    " centímetros"
);

function perimetroCuadrado (lado) {
    return lado * 4;
}
console.log(
    "El perímetro del cuadrado mide " 
    + perimetroCuadrado(ladoCuadrado) + 
    " centimetros"
);

function areaCuadrado (lado) {
    return lado * lado
}
console.log(
    "El área del cuadrado mide " 
    + areaCuadrado (ladoCuadrado) + 
    " centimetros cuadrados"
);
console.groupEnd();

// Código del triángulo

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) {
    return base * altura / 2;
}

console.group("Triangulos");
console.log(
    "Los lados del triángulo miden " 
    + ladoTriangulo1 
    + " cms, "
    + ladoTriangulo2 
    + " cms, "
    + baseTriangulo 
    + " cms"
);
console.log(
    "El perimetro del triángulo mide " 
    + perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo)
    + " centímetros"
);
console.log(
    "La altura del triángulo es de " 
    + alturaTriangulo 
    + " centímetros"
);

console.log(
    "El área del triangulo mide " 
    + areaTriangulo (baseTriangulo, alturaTriangulo)
    + " centimetros cuadrados"
);
console.groupEnd();

// Código del círculo

const radioCirculo = 4;
const PI = Math.PI;

function perimetroCirculo (radio) {
    return 2 * PI * radio;
}

function areaCirculo (radio) {
    return radio * radio * PI;
}

console.group("Círculos");
console.log(
    "El valor de PI de Math es " 
    + PI 
);

console.log(
    "El radio del círculo mide " 
    + radioCirculo 
    + " cms"
);

console.log(
    "El perimetro del círculo mide " 
    + perimetroCirculo (radioCirculo)
    + " centímetros"
);

console.log(
    "El área del círculo mide " 
    + areaCirculo (radioCirculo) 
    + " centimetros cuadrados"
);

console.groupEnd();



