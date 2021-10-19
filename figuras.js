// Código del cuadrado
const ladoCuadrado = 5;

function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado
}

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

// Código del círculo

const radioCirculo = 4;
const PI = Math.PI;

function perimetroCirculo (radio) {
    return 2 * PI * radio;
}

function areaCirculo (radio) {
    return radio * radio * PI;
}

// Interacción con el HTML

// Cuadrado

function calcularPerimetroCuadrado () {
    const ladoEntrada = document.getElementById("ladoCuadrado");
    const valorEntrada = ladoEntrada.value; 

    const perimetro = perimetroCuadrado(valorEntrada);
    alert("El perimetro del cuadrado es " + perimetro + " centimetros");
}
function calcularAreaCuadrado () {
    const ladoEntrada = document.getElementById("ladoCuadrado");
    const valorEntrada = ladoEntrada.value; 

    const area = areaCuadrado(valorEntrada);
    alert("El area del cuadrado es " + area + " centimetros cuadrados");
}

// Triangulo

function calcularPerimetroTriangulo () {
    const ladoEntrada1 = document.getElementById("ladoTriangulo1");
    const valorEntrada1 = parseInt(ladoEntrada1.value); 

    const ladoEntrada2 = document.getElementById("ladoTriangulo2");
    const valorEntrada2 = parseInt(ladoEntrada2.value); 

    const ladoEntrada3 = document.getElementById("ladoTriangulo3");
    const valorEntrada3 = parseInt(ladoEntrada3.value); 

    const perimetro = perimetroTriangulo(valorEntrada1, valorEntrada2, valorEntrada3);
    alert("El perimetro del triangulo es " + perimetro + " centimetros");
}
function calcularAreaTriangulo () {
    const base = document.getElementById("ladoTriangulo3");
    const valorBase = parseInt(base.value); 

    const altura = document.getElementById("alturaTriangulo");
    const valoraltura = parseFloat(altura.value); 

    const area = areaTriangulo(valorBase, valoraltura);
    alert("El area del triangulo es " + area + " centimetros cuadrados");
}

// circulo

function calcularPerimetroCirculo () {
    const radio = document.getElementById("radio");
    const valorRadio = radio.value; 

    const perimetro = perimetroCirculo(valorRadio);
    alert("El perimetro del circulo es " + perimetro + " centimetros");
}
function calcularAreaCirculo () {
    const radio = document.getElementById("radio");
    const valorRadio = radio.value; 

    const area = areaCirculo(valorRadio);
    alert("El area del circulo es " + area + " centimetros cuadrados");
}
