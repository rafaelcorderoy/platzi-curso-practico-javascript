// Código del cuadrado
const ladoCuadrado = 5;
console.group("Cuadrados");
console.log(
    "Los lados del cuadrado miden " 
    + ladoCuadrado + 
    " centímetros"
);

const perimetroCuadrado = ladoCuadrado * 4;

console.log(
    "El perímetro del cuadrado mide " 
    + perimetroCuadrado + 
    " centimetros"
);

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(
    "El área del cuadrado mide " 
    + areaCuadrado + 
    " centimetros cuadrados"
);
console.groupEnd();

// Código del triángulo

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = baseTriangulo * alturaTriangulo / 2;

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
    + perimetroTriangulo 
    + " centímetros"
);
console.log(
    "La altura del triángulo es de " 
    + alturaTriangulo 
    + " centímetros"
);

console.log(
    "El área del triangulo mide " 
    + areaTriangulo 
    + " centimetros cuadrados"
);
console.groupEnd();

// Código del círculo

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const pi = 3.14159;
const PI = Math.PI;
const perimetroCirculo = 2 * pi * radioCirculo;
const perimetroCirculoPi = 2 * PI * radioCirculo;
const areaCirculo = radioCirculo * radioCirculo * pi;
const areaCirculoPi = radioCirculo * radioCirculo * PI;

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
    "El diámetro del círculo mide " 
    + diametroCirculo 
    + " cms"
);


console.log(
    "El perimetro del círculo mide " 
    + perimetroCirculo 
    + " centímetros"
);
console.log(
    "El perimetro del círculo con Math.PI mide " 
    + perimetroCirculoPi
    + " centímetros"
);

console.log(
    "El área del círculo mide " 
    + areaCirculo 
    + " centimetros cuadrados"
);
console.log(
    "El área del círculo con Math.PI mide " 
    + areaCirculoPi 
    + " centimetros cuadrados"
);

console.groupEnd();



