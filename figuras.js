//codigo del cuadrado
console.group("cuadrados");
//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden : " + ladoCuadrado +"cm");

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado*4;
} 
//console.log("el perimetro del cuadrado miden : " + perimetroCuadrado+"cm");
function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado*ladoCuadrado;
} 
//const areaCuadrado= ladoCuadrado*ladoCuadrado;
console.groupEnd();
//console.log("el area del cuadrado miden : " + areaCuadrado+"cm'2");

//codigo del triangulo
console.group("triangulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const ladoBase = 4;
// const alturaTriangulo = 4;

// console.log(
//     "los lados del cuadrado miden : " 
//     + ladoTriangulo1 
//     +"cm "
//     +ladoTriangulo2
//     +"cm "
//     + ladoBase
//     +"cm"
// );

function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,ladoBase) {
    return ladoTriangulo1+ladoTriangulo2+ladoBase;
}

//const perimetroTriangulo= ladoTriangulo1+ladoTriangulo2+ladoBase;
//console.log("el perimetro del triangulo miden : " + perimetroTriangulo+"cm");

function areaTriangulo(ladoTriangulo1,ladoTriangulo2,ladoBase) {
    a=(ladoTriangulo1+ladoTriangulo2+ladoBase)/2;
    return Math.sqrt(a*(a-ladoTriangulo1)*(a-ladoTriangulo2)*(a-ladoBase));
}
//const areaTriangulo= (ladoBase*alturaTriangulo)/2;
//console.log("el area del triangulo miden : " + areaTriangulo+"cm'2");
console.groupEnd();

console.group("Circulos");
    //radio
    // const radioCirculo = 4;
    // console.log("el radio del circulo miden : " + radioCirculo+"cm'2");

    // //diametro
    // const diametroCirculo= radioCirculo*2;
    // console.log("el diametro del circulo miden : " + diametroCirculo+"cm'2");
    function diametroCirculo(radioCirculo) {
        return radioCirculo*2;
    }
    //pI
    //const pi=3.1415;
    const pi= Math.PI;
    // console.log("el PI miden : " + pi+"cm");

    //circunferencia

    function perimetroCirculo(radioCirculo) {
        const diametro= diametroCirculo(radioCirculo)
        return diametro*pi;
    }

    function areaCirculo(radioCirculo) {
        return pi*(radioCirculo*radioCirculo);
    }

    // const perimetroCirculo=diametroCirculo*pi;
    // console.log("el perimetro del circulo miden : " + perimetroCirculo+"cm'2");


    // //Area
    // const areaCirculo= pi*(radioCirculo*radioCirculo);
    // console.log("el area del circulo miden : " + areaCirculo+"cm'2");


console.groupEnd();


//Aqui interactuamos con HTML
//cuadrado
function calcularPerimetroCuadrado() {
    const input=document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro=perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input=document.getElementById("inputCuadrado");
    const value = input.value;

    const area=areaCuadrado(value);
    alert(area);
}

//triangulo
function calcularPerimetroTriangulo() {
    //value es igual para todos porque es la propiedad que le das, osea el valor
    const input1=document.getElementById("inputTriangulo1");
    const value1 = parseInt(input1.value);
    
    const input2=document.getElementById("inputTriangulo2");
    const value2 = parseInt(input2.value);
    const input3=document.getElementById("inputTriangulo3");
    const value3 = parseInt(input3.value);

    const perimetro1=perimetroTriangulo(value1,value2,value3);
    alert(perimetro1);
}

function calcularAreaTriangulo() {
    const input1=document.getElementById("inputTriangulo1");
    const value1=input1.value;
    const input2=document.getElementById("inputTriangulo2");
    const value2=input2.value;
    const input3=document.getElementById("inputTriangulo3");
    const value3=input3.value;
    const area= areaTriangulo(value1,value2,value3);
    alert(area);
}

//circulo
function calcularPerimetroCirculo() {
    const input1=document.getElementById("inputCirculo");
    const value1=input1.value
    const perimetro= perimetroCirculo(value1);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input1=document.getElementById("inputCirculo");
    const value1=input1.value;
    const area= areaCirculo(value1);
    alert(area);
}

var lado1=prompt("escribe el valor del primer lado: ");
var lado2=prompt("escribe el valor del segundo lado: ");
var lado3=prompt("escribe el valor de la base: ");


function triangulo(lado1,lado2,lado3) {
    if (lado1 == lado2) {
        console.log("el triángulo es isosceles");
        respuesta=Math.sqrt(lado1*lado1-(lado3/4));
    } else{
        console.log("otro tipo de  triangulo");
        respuesta=Math.sqrt(lado1*lado1+lado2*lado2);
    }

    alert("el valor de la altura es: "+respuesta);
}