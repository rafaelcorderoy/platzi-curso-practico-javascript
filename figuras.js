
// Código del triángulo

function determinarTipoTriangulo (lado1, lado2, base) {
    let tipo = "No definido";
    if (lado1 == lado2) {
        if (lado1 == base) {
            tipo = "Equilátero"
        } else {
            tipo = "Isóseles"
        }
    } else if (lado1 == base) {
        tipo = "Isóseles"
    } else if (lado2 == base) {
        tipo = "Isóseles"
    } else {
        tipo = "Escaleno"
    }
    return tipo;
}

function alturaTriangulo (l1, l2, b) {
    let lado1 = l1;
    let lado2 = l2;
    let base = b;
    console.log(lado1, lado2, base);
    console.log(base/2*base/2);
    console.log(lado1*lado1);
    return Math.sqrt((lado1 * lado1) - ((base / 2) * (base / 2)));
}

// Interacción con el HTML

// Triangulo

function esIsoseles () {
    const ladoEntrada1 = document.getElementById("ladoTriangulo1");
    const valorEntrada1 = parseInt(ladoEntrada1.value); 

    const ladoEntrada2 = document.getElementById("ladoTriangulo2");
    const valorEntrada2 = parseInt(ladoEntrada2.value); 

    const ladoEntrada3 = document.getElementById("ladoTriangulo3");
    const valorEntrada3 = parseInt(ladoEntrada3.value); 

    if (ladoEntrada1 + ladoEntrada2 > ladoEntrada3) {
        alert("La base no puede ser mas pequeña que la suma de sus lados");
    }

    const tipo = determinarTipoTriangulo(valorEntrada1, valorEntrada2, valorEntrada3);
    alert("El tipo de triangulo es " + tipo);
}
function calcularAlturaTriangulo () {
    const ladoEntrada1 = document.getElementById("ladoTriangulo1");
    const valorEntrada1 = parseFloat(ladoEntrada1.value); 

    const ladoEntrada2 = document.getElementById("ladoTriangulo2");
    const valorEntrada2 = parseFloat(ladoEntrada2.value); 

    const ladoEntrada3 = document.getElementById("ladoTriangulo3");
    const valorEntrada3 = parseFloat(ladoEntrada3.value); 

    if ((valorEntrada1 + valorEntrada2) < valorEntrada3) {
        alert ("La base no puede ser mas grande que la suma de sus lados, no se puede calcular la altura");
    } else {
        const altura = alturaTriangulo(valorEntrada1, valorEntrada2, valorEntrada3);
        console.log("Pase por aqui", valorEntrada1, valorEntrada2, valorEntrada3);
        alert("La altura del triangulo es " + altura  + " centimetros cuadrados");    
    }

}

