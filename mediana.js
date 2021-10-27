function calcularMediaArit(lista) {
    // let sumalista1= 0;

    // for (let i = 0; i < lista1.length; i++) {
    //     sumalista1=sumalista1 + lista1[i];
    
    // }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }  
    );

    const promedioLista1= sumaLista / lista.length;
    return promedioLista1;
}

const lista1=[
    100,
    200,
    500,
    400000000,
];

const mitadLista1= parseInt(lista1.length /2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    }else{
       return false; 
    }
}

let mediana;
if (esPar(lista1.length)) {
    const element1 = lista1[mitadLista1-1];
    const element2= lista1[mitadLista1];
    const promedioElemento1y2 = calcularMediaArit([
        element1,
        element2,
    ]);
    mediana = promedioElemento1y2;
        
}else{
    mediana=lista1[mitadLista1];
}

//mio
// function medianaEjercicio(lista1) {
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
