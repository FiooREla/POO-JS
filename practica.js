// lista1= [
//     100,
//     200,
//     600,
//     300,
//     200,

// ];


//FUNCION MEDIANA
// function medianaEjercicio(lista1) {
//     for (let i = 0; i < lista1.length; i++) {
//         valor= 0;
//         valor= valor+lista1[i];
//         console.log(valor);
        
//     }
//     if (lista1.length % 2===0) {
//         elementoMedio=parseInt(lista1.length/2-1);
//         elementoMedio2=parseInt(lista1.length/2);
//         valorElemento=lista1[elementoMedio];
//         valorElemento2=lista1[elementoMedio2];
//         totalElemento=(valorElemento+valorElemento2)/2;
        
//     }else{
//         elementoMedio=parseInt(lista1.length/2);
//         totalElemento=lista1[elementoMedio]/2;
//     }
//     return totalElemento;
// }


// const lista1=[
//     1,
//     1,
//     2,
//     2,
//     2,
//     3,
//     7,
//     3,
//     4,
//     4,
//     5,

// ]
//FUNCION MODA

// function moda(lista1) {
//     const lista1Count ={};

// lista1.map(
//     function (propiedad) {
//         if (lista1Count[propiedad]) {
//             lista1Count[propiedad]+=1;
//         }else{
//             lista1Count[propiedad]=1;
//         }
//     }
// )

// const lista1Array=Object.entries(lista1Count).sort(
//     function (elementoA, elementoB) {
//         return elementoA[1]-elementoB[1];
//     }
// )

// const moda=lista1Array[lista1Array.length-1];
// return moda;
// }

//PROMEDIO PONDERADO

// const primero =[{
//     nombre: "filosofia",
//     nota:10,
//     creditos: 2,
// },
// {
//     nombre:"programacion",
//     nota:8,
//     creditos:5,
// },
// {
//     nombre:"logica",
//     nota:7,
//     creditos:5,
// },
// ];
// const valorResult=[];
// const valorResult2=[];
// const haciendoMap = primero.map(
//     function (valorResult) {
//         return valorResult.nota*valorResult.creditos;
//     }
// );

// const haciendoReduce = haciendoMap.reduce(
//     function (sum=0,elemento) {
//         return elemento+sum;
//     }
// );

// const creditosMap = primero.map(
//     function (valorResult) {
//         return valorResult.creditos;
//     }
// );

// const creditosReduce= creditosMap.reduce(
//     function (sum=0,valAum) {
//         return sum + valAum;
//     }
// );

// const resultado= haciendoReduce/creditosReduce;

//MEDIA GEOMÈTRICA

// const lista=[2,8];
// const arrayNuevo=[];
// function mediaGeometrica(lista) {
//     const recorridoMap = lista.reduce(
//         function (mul=1,arrayNuevo) {
//             return mul*arrayNuevo;
//         }
//     )
//     return resultado=recorridoMap**(1/(lista.length));
// }


//con funcion

